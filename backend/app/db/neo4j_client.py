import os
from neo4j import GraphDatabase

NEO4J_URI = os.getenv("NEO4J_URI", "bolt://localhost:7687")
NEO4J_USER = os.getenv("NEO4J_USER", "neo4j")
NEO4J_PASSWORD = os.getenv("NEO4J_PASSWORD", "password")

class Neo4jClient:
    def __init__(self):
        self.driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD))

    def close(self):
        self.driver.close()

    def create_transfer(self, sender_id: str, receiver_id: str, amount: float, tx_id: str):
        query = """
        MERGE (s:Account {id: $sender_id})
        MERGE (r:Account {id: $receiver_id})
        CREATE (s)-[t:TRANSFERRED {amount: $amount, tx_id: $tx_id, timestamp: datetime()}]->(r)
        """
        with self.driver.session() as session:
            session.run(query, sender_id=sender_id, receiver_id=receiver_id, amount=amount, tx_id=tx_id)
            
    def get_account_graph(self, account_id: str):
        # UPGRADED: Multi-hop query to detect complex fraud rings (up to 5 hops away)
        query = """
        MATCH path = (a:Account {id: $account_id})-[*1..5]-(b:Account)
        UNWIND relationships(path) AS r
        RETURN DISTINCT startNode(r).id AS source, endNode(r).id AS target, r.amount AS amount, type(r) AS rel_type
        """
        with self.driver.session() as session:
            result = session.run(query, account_id=account_id)
            return [record.data() for record in result]

neo4j_client = Neo4jClient()
