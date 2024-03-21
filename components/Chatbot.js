import React, { useState } from 'react';


export default function Chatbot() {

  const [age, setAge] = useState('');
  const [sex, setSex] = useState('male');
  const [bmi, setBMI] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('Weight loss');
  const [firstLoad, setFirstLoad] = useState(true)
  const [input, setInput] = useState('')
  let holder = ["","","",""];

  const handleAgeChange = (event) => {
    setFirstLoad(false)
    const inputAge = event.target.value;
    if (!isNaN(inputAge) && inputAge >= 18 && inputAge <= 120) {
      setAge(inputAge);
    } 
    else{
      setAge(1);
    }
  };

  const handleSexChange = (event) => {
    setSex(event.target.value); 
  }


  const handleBMIChange = (event) => {
    setFirstLoad(false)
    const bmiValue = event.target.value
    if (!isNaN(bmiValue) && bmiValue > 0) {
      setBMI(bmiValue);
    }
    else{  
      setBMI(0);
    }
  };

  const handleFitnessGoalChange = (event) => {
    setFitnessGoal(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault()
    holder = "["+fitnessGoal+"]"+","+"["+bmi+"]"+","+"["+age+"]"+","+"["+sex+"]"

    setInput("Getting Plan...")
    let fetchPlan = await fetch('api/getPlan', {
        method: 'POST',
        body: JSON.stringify({messages: holder})
    }).then((res)=>res.json());
    setInput(fetchPlan)
  }

  return (
    <>
    <div className='header'>
      <span><h2><b>Get your FREE plan for your fitness journey</b></h2></span>
    </div>

    <div className="chatbot-header">
      <span className="chatbot-name" ><h3><b>Powered by Kub20 AI</b></h3></span>
    </div>

    <div className="ai-plan-form-containter">
      <div class="ai-plan-form">
        <form onSubmit={handleSubmit} hidden={input==='' ? false:true}>
          <div>
            <label>
              <p>Age:</p>
              <input
                type="text"
                onChange={handleAgeChange}
                style={{ borderColor: age < 18 && firstLoad===false ? 'red' : '' }}
              />       
            </label>
            {age < 18  && firstLoad === false ?   
              <>
                  <span class="validation">-Age is required</span><br />
                  <span class="validation">-Can't be younger than 18</span>
              </>:  
            <></>}
          </div>

          <div>
            <label>
              <p>Sex:</p>
                <select onChange={handleSexChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>            
            </label>
          </div>

          <div>
            <label>
              <p>BMI:</p>
                <input
                  type="text"
                  onChange={handleBMIChange}
                  style={{ borderColor: bmi <= 0 && firstLoad === false ? 'red' : '' }}
                />
            </label>
            {bmi <= 0 && firstLoad === false ? 
              <>
                  <span class="validation">-BMI is required</span>
              </>:
            <></>}            
          </div>

          <div>
            <label>
            <p>Fitness Goal:</p>
              <select onChange={handleFitnessGoalChange}>
                <option value="Weight loss">Weight loss</option>
                <option value="Build muscle">Build muscle</option>
                <option value="Get toned">Get toned</option>
                <option value="Become stronger">Become stronger</option>
              </select>
            </label>
          </div>

            <button type='submit' disabled = {fitnessGoal === '' || sex === '' || bmi <= 0  || age < 18 ? true : false}><b>Get Plan</b></button>
        </form>
        <div className="chat-messages" hidden={input != '' ? false:true}>
          <div className='message assistant' >
            <p>{input}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

