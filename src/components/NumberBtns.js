import React from 'react'
import './Design.css'

const NumberBtns = ({values, setValues}) => {
  const clic = (e) => {
    e.preventDefault();
    if(!values.number){
      setValues({
        'result':values.value + e.target.textContent,
        'value':values.value+e.target.textContent,
        'value_aux': values.value_aux,
        'operator': values.number,
        'number':values.number,
      });

    }else{
      setValues({
        'result': e.target.textContent,
        'value_aux':values.value_aux,
        'value': e.target.textContent,
        'operator':values.operator,
        'number':0,
      });
    }
  }
  return (
    <>
      <div className='grid-item-number' key="btn9" onClick={clic} >9</div>
      <div className='grid-item-number' key="btn8" onClick={clic} >8</div>
      <div className='grid-item-number'key="btn7"  onClick={clic}>7</div>
      <div className='grid-item-number' key="btn6" onClick={clic}>6</div>
      <div className='grid-item-number' key="btn5" onClick={clic}>5</div>
      <div className='grid-item-number' key="btn4" onClick={clic}>4</div>
      <div className='grid-item-number' key="btn3" onClick={clic}>3</div>
      <div className='grid-item-number' key="btn2" onClick={clic}>2</div>
      <div className='grid-item-number' key="btn1" onClick={clic}>1</div>
      <div className='grid-item-cero' key="btn0"   onClick={clic}>0</div>
      </>
      
      
  )
}

export default NumberBtns
