import React, { useState, useEffect } from 'react';

import { useChat } from 'ai/react';

export default function Chatbot() {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api",
  });

  useEffect(() =>{
    var chatBox = document.getElementById("chatMessages") 
    chatBox.scrollTo(0,chatBox.scrollHeight)
    return () =>{}
  })

  return ( 
    <>
    <div className='header'>
      <span><h2>Klub 20</h2></span>
      <span><h4>Beaconsfield</h4></span> 
    </div>

    <div className="chatbot-header">
    <span className="chatbot-name" ><h5>Kub20 AI</h5></span>

    <span className="chatbot-description"><em>Let me answer any questions you have about fitness and exercising</em></span>
    </div>
    <div className='chatbot-container'>
      <div className="chatbot">
        <div className="chat-messages" id="chatMessages">      
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <p> {message.role == "user" ? 'User' : 'A.I'} </p>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </>
  );
}

