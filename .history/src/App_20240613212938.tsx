import React, { useEffect, useState } from 'react';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

function App() {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("YOUR_HUB_URL")  // Replace with your actual SignalR hub URL
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          console.log('Connected!');

          connection.on('ReceiveMessage', message => {
            setMessages(prevMessages => [...prevMessages, message]);
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const handleSendMessage = async () => {
    if (connection && newMessage.trim()) {
      await connection.invoke('SendMessageToAdmin', newMessage);
      setNewMessage("");  // Clear input after sending
    }
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