let socket;
const listeners = [];

export const connectSocket = (onMessage) => {
  if (!socket || socket.readyState === WebSocket.CLOSED) {
    socket = new WebSocket("ws://localhost:8000/ws/transactions");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      listeners.forEach(listener => listener(data));
    };
    
    socket.onclose = () => {
      console.log("WebSocket connection closed, reconnecting...");
      setTimeout(() => {
        socket = null;
        if (listeners.length > 0) {
            connectSocket(listeners[0]); // Trigger reconnect
        }
      }, 3000);
    };
  }
  
  if (!listeners.includes(onMessage)) {
      listeners.push(onMessage);
  }

  // Return unsubscribe function
  return () => {
    const index = listeners.indexOf(onMessage);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
};

export const sendMessage = (msg) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(msg));
  }
};
