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
        'operator':values.operator,
        'number':0,
      });
    }
  }
  return (
    <>
    <div class="fila">
      <button class="btnNum" key="btn7" onClick={clic}>7</button>
      <button class="btnNum" key="btn8" onClick={clic}>8</button>
      <button class="btnNum" key="btn9" onClick={clic}>9</button>
    </div>

    <div class="fila">
      <button class="btnNum" key="btn4" onClick={clic}>4</button>
      <button class="btnNum" key="btn5" onClick={clic}>5</button>
      <button class="btnNum" key="btn6" onClick={clic}>6</button>
    </div>

    <div class="fila">
      <button class="btnNum" key="btn1" onClick={clic}>1</button>
      <button class="btnNum" key="btn2" onClick={clic}>2</button>
      <button class="btnNum" key="btn3" onClick={clic}>3</button>
    </div>

    <div class="fila">
      <button class="btnNum" key="btn0" onClick={clic}>0</button>
    </div>

      </>
      
  )
}

export default NumberBtns
