import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState() is a hooks method which are used to propagate the value in UI or Dom
  // It gives or return two things and we write it in array formate 
  // first value is variable and second value is function or method which control the first value.

  let [counter, setCounter] = useState(0)

  //For adding the value

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }
  
  // Q. If there is 4 smilliar state then value are update 4times or not.
  //Ans:= NO,Because In this case react uses useState that is the method in fiber algorithm they check all the packeges and send it in the form of bacheses(collection of packets).
    // If they all are similiar then only latest operation are performed.
    // const addValue = () => {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    //}

  

  //For removing the value
  const removeValue = ()=>{
    if(counter==0){
      return 0;
    }
    else{
      setCounter(counter-1)
    }  
  }
  return (
    <>

      <h1>Add and Remove the value</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button><br />
      <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
