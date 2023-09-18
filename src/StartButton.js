import React from "react";
import './App.css';
import './StartScreen.css'


const StartButton = ({ onClick })=> {
  return (
    <>
    <div className="btn-container-data">
      <button onClick={onClick} className="startbtn-data">
        CLiCK HERE TO STARt {/* The letter casing may affect styling */}
      </button>
    </div>
    </>
  );
}

export default StartButton;
