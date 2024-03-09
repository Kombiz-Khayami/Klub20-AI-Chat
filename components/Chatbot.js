import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

import { useChat } from 'ai/react';
import Link from 'next/link';


export default function Chatbot() {
  const router = useRouter();
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [bmi, setBMI] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [mainFactors, setMainFactors] = useState(["","","",""])
  const [input, setInput] = useState('')
  let holder = ["","","",""];

  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    if (!isNaN(inputAge) && inputAge >= 18 && inputAge <= 120) {
      holder = mainFactors;
      holder[2] = "["+inputAge+"]"
      setMainFactors(holder)
      setAge(inputAge);
    } 
    else{
      setAge('');
    }
  };

  const handleSexChange = (event) => {
    holder = mainFactors;
    holder[3] = "["+event.target.value+"]";
    setMainFactors(holder);
    setSex(event.target.value);
    
     
    console.log(holder[3]);
  }


  const handleBMIChange = (event) => {
    const bmiValue = event.target.value
    if (!isNaN(bmiValue) && bmiValue > 0) {
      holder = mainFactors;
      holder[1] = "["+bmiValue+"]";
      setMainFactors(holder);
      setBMI(bmiValue);
    }
    else{  
      setBMI('');
    }
  };

  const handleFitnessGoalChange = (event) => {
    holder = mainFactors;
    holder[0] = "["+event.target.value+"]"
    setMainFactors(holder);
    setFitnessGoal(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault()
    holder = mainFactors[0]+","+mainFactors[1]+","+mainFactors[2]+","+mainFactors[3] 
    setInput("Getting Plan...")
   let fetchPlan = await fetch('api/getPlan', {
      method: 'POST',
      body: JSON.stringify({messages: holder})
   }).then((res)=>res.json());
   setInput(fetchPlan)
  }

  return (
    <>
    <form onSubmit={handleSubmit} hidden={input==='' ? false:true}>
      <div>
        <label>
          Age:
          <input
            type="text"
            onChange={handleAgeChange}
            style={{ borderColor: age === '' ? 'red' : '' }}
          />
        </label>
      </div>

      <div>
        <label>
          Sex:
          <input
            type="radio"
            name="Sex"
            value="Male"            
            onChange={handleSexChange}
          />
          Male
          <input
            type="radio"
            name="Sex"
            value="Female"            
            onChange={handleSexChange}
          />
          Female
        </label>
      </div>

      <div>
      <label>
          BMI:
          <input
            type="text"
            onChange={handleBMIChange}
            style={{ borderColor: bmi === '' ? 'red' : '' }}
          />
        </label>
      </div>

      <div>
        <label>
          Fitness Goal:
          <input
            type="radio"
            name="fitnessGoal"
            value="Weight loss"            
            onChange={handleFitnessGoalChange}
          />
          Weight loss
          <input
            type="radio"
            name="fitnessGoal"
            value="Build muscle"
            onChange={handleFitnessGoalChange}
          />
          Build muscle
          <input
            type="radio"
            name="fitnessGoal"
            value="Get toned"
            onChange={handleFitnessGoalChange}
          />
          Get toned
          <input
            type="radio"
            name="fitnessGoal"
            value="Become stronger"            
            onChange={handleFitnessGoalChange}
          />
          Become stronger
        </label>
      </div>

        <button type='submit' disabled = {fitnessGoal === '' || sex === '' || bmi === '' || age === '' ? true : false}>Get Plan</button>
    </form>
    <div className="chat-messages" hidden={input != '' ? false:true}>
      <div className='message assistant' >
        <p>{input}</p>
      </div>
    </div>
    </>
  );
}

/*

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

*/