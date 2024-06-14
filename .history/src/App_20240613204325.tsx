import React, { useEffect, useState } from 'react';
import SignalRContext from './connectionws';

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  // Use the context's useSignalREffect method correctly by providing all required arguments
  // SignalRContext.useSignalREffect(
  //   "ReceiveMessage",  // The event name to listen to
  //   (message: string) => {
  //     setMessages(prevMessages => [...prevMessages, message]);  // Add the new message to the current list
  //   },
  //   []  // Dependency array, typically empty if you always want to listen from the component's mount
  // );

  return (
    <div className="App">
      <h1>Test WS Socket Server</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

