import React from 'react'
import './Design.css'

const OperatorBtns = ({values, setValues}) => {
  
  const Operaciones = (e) => {
    
    e.preventDefault();

    if(values.value !== ''){
      
      if(!values.number){
        
        setValues({
          'result': values.result,
          'value': values.value,
          'value_aux': parseFloat(values.value),
          'operator': e.target.textContent,
          'number': 1
        });

      }

      if(values.number){
        
        const result_aux = 
        values.operator === '+' ? (values.value_aux + parseFloat(values.value)) :
        values.operator === '-' ? (values.value_aux - parseFloat(values.value)) :
        values.operator === '/' ? (values.value_aux / parseFloat(values.value)) :
        values.operator === 'X' ? (values.value_aux * parseFloat(values.value)) : 0;
        
        setValues({
          'result' : result_aux,
          'value' : values.value,
          'value_aux' : result_aux,
          'operator' : e.target.textContent,
          'number' : 1,
        });
      };
    };
  }

  return (
      <>
        <div class="grid-item-operadores" key="btnSum" onClick={Operaciones}>+</div>
        <div class="grid-item-operadores" key="btnRest" onClick={Operaciones}>-</div>
        <div class="grid-item-operadores" key="btnMulti" onClick={Operaciones}>X</div>
        <div class="grid-item-operadores" key="btnDivi" onClick={Operaciones}>/</div>
      </>
  )
};

export default OperatorBtns
