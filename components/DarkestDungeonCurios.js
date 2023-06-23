import CourtyardCurios from '%/Courtyard';
import FarmestedCurios from '%/Farmsted'; 
import React, { useState } from 'react';

function DarkestDungeonCurios() {
  let [show, setShow] = useState("courtyard")

  function handleCourtyard() {
    setShow("courtyard");
  }
  
  function handleFarmsted() {
    setShow("farmsted");
  }

  return ( 
    <>
    <div className="heading"><h1>Crimson Court Curios</h1></div>
    <button onClick={handleCourtyard}>Courtyard</button>
    <button onClick={handleFarmsted}>Farmsted</button>
    <div className="wrapper-header"> 
        <h3>Name</h3>
        <div className="without">
            <img src="assets/images/redCross.png" className="red-cross" />
            <h3>With out Cleansing</h3>
            <img src="assets/images/redCross.png" className="red-cross" />
        </div>
        <h3>With Cleansing</h3>
    </div>

    <div className="wrapper-main" >
      {show === "courtyard" &&
       <CourtyardCurios /> }


      {show === "farmsted" &&
         <FarmestedCurios /> }
    </div></>
  );
}
export default DarkestDungeonCurios;