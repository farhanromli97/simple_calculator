import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import stringMath from 'string-math'





function App() {

  const [display, setDisplay] = useState([])
  const [number, setNumber] = useState([])

  useEffect(()=>{console.log(display)}, [display])

  // const handleClick = (event) => {
  //   setDisplay([...display, event.target.innerText])
  // }

  const handleNumber = (event) => {
    if(number.length>= 8){
      alert('Max 8 digits only')
    }else{
      setNumber([...number, event.target.innerText])
      setDisplay([...display, event.target.innerText])
    }  
  }


  const handleOperation = (event) => { 
    const operationArray = ['+', '-', 'x', '÷']
    let data = [...display]
    if(display.length == 0){
      alert('Invalid format')
    }else if(operationArray.includes(data[data.length - 1])){
    data[data.length - 1] = event.target.innerText
    setDisplay(data)


    }else{
    setDisplay([...display, event.target.innerText])
    setNumber([])
    }
   }

  
  const calculateTotal = () =>{   
    try {
      // join the element into and remove comma separator and replace X and ÷ with * and / respectively
      const mathExpression = display.join().replaceAll(',', '').replaceAll('x', '*').replaceAll('÷', '/') 
      const total = stringMath(mathExpression)
      // convert the total(type number) into string and subsequently into an Array
      const newArray = Array.from(total.toString()) 
      setDisplay(newArray)
      setNumber(newArray)
    } catch (error) {
      alert('Invalid format')
    }
  }

  const handleDelete = () => (setDisplay(display.slice(0, -1)))
  const resetDisplay = () => {
    setNumber([])
    setDisplay([])
  }

  return (
   <div >
      <div style={{width: "200px", height: "30px", backgroundColor: "lightblue", color: "black"}}>
        {display}
      </div>
      <div >
        <button onClick={resetDisplay}>Reset</button>
      </div>
      <div >
        <button onClick={handleNumber}>1</button>
        <button onClick={handleNumber}>2</button>
        <button onClick={handleNumber}>3</button>
        <button onClick={handleOperation}>+</button>
      </div>
      <div>
        <button onClick={handleNumber}>4</button>
        <button onClick={handleNumber}>5</button>
        <button onClick={handleNumber}>6</button>
        <button onClick={handleOperation}>-</button>

      </div>    
      <div>
        <button onClick={handleNumber}>7</button>
        <button onClick={handleNumber}>8</button>
        <button onClick={handleNumber}>9</button>
        <button onClick={handleOperation}>x</button>

      </div>
      <div>
        <button onClick={calculateTotal}>=</button>
        <button onClick={handleNumber}>0</button>
        <button onClick={handleDelete}>C</button>
        <button onClick={handleOperation}>÷</button>
      </div>

   </div>
  )
}

export default App
