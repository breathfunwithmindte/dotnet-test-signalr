import React, { useEffect, useState } from 'react';
import SignalRContext from './connectionws';

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  // Use the context's useSignalREffect method correctly by providing all required arguments
  SignalRContext.useSignalREffect(
    "ReceiveMessage",  // The event name to listen to
    (message: string) => {
      console.log(message)
      setMessages(prevMessages => [...prevMessages, message]);  // Add the new message to the current list
    },
    []  // Dependency array, typically empty if you always want to listen from the component's mount
  );
  const handleSendMessage = async () => {
   
  };
  

  return (
    <div className="App">
      <h1>Test WS Socket Server</h1>
      <hr />
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send Message</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

