import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data';
const App = () => {
  const [count,setCount] = useState(0);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(true);
  const [restart, setRestart] = useState(true);
  const handleNext = () =>{
      setPrev(false);
      setRestart(false);
    if(count<5){
      setCount(count+1);
    }if(count==3){
      setNext(true);
    }
  }
  const handlePrev = () =>{
    if(count>0)
      setCount(count-1);
    if(count==1){
      setPrev(true);
      setRestart(true);
    }
    setNext(false);
    
  }
  const handleRestart = () =>{
    setCount(0);
    setNext(false);
    setPrev(true);
    setRestart(true);
  }
  return (
    <>
    <div id="slide">
      <h1 data-testid="title">{slides[count].title}</h1>
      <p data-testid="text">{slides[count].text}</p>
      </div>
      <div>
          <button disabled={prev} data-testid="button-prev" onClick={handlePrev}>Prev</button>
          <button disabled={restart} data-testid="button-restart" onClick={handleRestart}>Restart</button>
          <button disabled={next} data-testid="button-next" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}


export default App;

