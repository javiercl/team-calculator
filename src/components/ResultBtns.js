import React from 'react'
import './Design.css'

const ResultBtns = ({values,setValues}) => {

  const handleClicCle = (e) => {
      e.preventDefault();
      setValues({
        'result' : 0,
        'value' : '',
        'value_aux' :0,
        'operator' : '',
        'number' :0
      });
    }
    const handleClicEqu = (e) => {
      e.preventDefault();
    if(values.value !== ''){
      const result_aux = 
      values.operator === '+' ? (values.value_aux + parseFloat(values.value)) :
        values.operator === '-' ? (values.value_aux - parseFloat(values.value)) :
        values.operator === '/' ? (values.value_aux / parseFloat(values.value)) :
        values.operator === 'X' ? (values.value_aux * parseFloat(values.value)) : 0;

        setValues({
          'result': result_aux,
          'value' : values.value,
          'value_aux' : result_aux,
          'operator' : '',
          'number': 1
        });
      }
    }

  return (
    <>
      <div class="fila2">
        <div className='grid-item-borrador' key="btnCle" onClick={handleClicCle}>CE</div>
      </div>
      <div class="fila2">
        <div className='grid-item-igual' key="btnequ" onClick={handleClicEqu}>=</div>
      </div>
    </>
  );
};

export default ResultBtns;