import React, {Component, useState} from "react";
import '../styles/App.css';
import data from '../data';
const App = () => {

  const [slideNo,setSlideNo] = useState(0);
  const [prevButton, setPrevButton] = useState(true);
  const [nextButton, setNextButton] = useState(false);
  const [restartButton, setRestartButton] = useState(true);
  
  const handleNext = () =>{
      setPrevButton(false);
      setRestartButton(false);
      
    if(slideNo<5){
      setSlideNo(slideNo+1);
    }if(slideNo==3){
      setNextButton(true);
    }
  }
  const handlePrev = () =>{
    if(slideNo>0)
      setSlideNo(slideNo-1);
    if(slideNo==1){
      setPrevButton(true);
      setRestartButton(true);
    }
    setNextButton(false);
    
  }
  const handleRestart = () =>{
    setSlideNo(0);
    setNextButton(false);
    setPrevButton(true);
    setRestartButton(true);
  }
  return (
    <>
    <div id="box">
      <h1 data-testid="title">{data[slideNo].title}</h1>
      <p data-testid="text">{data[slideNo].text}</p>
    </div>
    <div className="btn">
          <button disabled={prevButton} data-testid="button-prevButton" onClick={handlePrev}>Prev</button>
          <button disabled={restartButton} data-testid="button-restartButton" onClick={handleRestart}>Restart</button>
          <button disabled={nextButton} data-testid="button-nextButton" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}


export default App;
