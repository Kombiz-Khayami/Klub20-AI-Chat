import React, { useState } from 'react';


export default function Chatbot() {

  const [age, setAge] = useState('');
  const [sex, setSex] = useState('male');
  const [bmi, setBMI] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('Weight loss');
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
    console.log(event.target.value);
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
    console.log(event.target.value)
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
                style={{ borderColor: age === '' ? 'red' : '' }}
              />
            </label>
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
                  style={{ borderColor: bmi === '' ? 'red' : '' }}
                />
            </label>
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

            <button type='submit' disabled = {fitnessGoal === '' || sex === '' || bmi === '' || age === '' ? true : false}><b>Get Plan</b></button>
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

