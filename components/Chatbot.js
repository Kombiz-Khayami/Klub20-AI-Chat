import React, { useState } from 'react';

export default function Chatbot() {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  let currentMessage = []


  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  async function sendMessageToAPI() {
    
    const stuff = await fetch("/api/", {
      method: 'POST',
      body: JSON.stringify({messages: currentMessage}),
    }).then((res)=>res.json());
    currentMessage = [...currentMessage, stuff]
    setChatMessages(currentMessage)   
  }  

   function handleInputSubmit(event) {
    event.preventDefault();
    if (inputValue.trim()) {
      currentMessage = [...chatMessages, { role: 'user', content: inputValue.trim() }];
      setChatMessages(currentMessage);
      setInputValue('');
      sendMessageToAPI();
    }
    
  }


  return ( 
    
    <div className="chatbot-container">
      <div className="chat-messages">
        {chatMessages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <p> {message.role == "user" ? 'User' : 'A.I'} </p>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleInputSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

