import { React, useState} from 'react';

import Display from "./Display";
import NumberBtns from "./NumberBtns";
import OperatorBtns from "./OperatorBtns";
import ResultBtns from "./ResultBtns";
import BorradorBtn from "./BorradorBtn";


function App() {

  

  const [values, setValues] = useState({
    'result' : '0',   // valor que va en el display
    'value' : '',     // número actual
    'value_aux' : 0,  // valor 2 de una operacion
    'operator' : '',  // operador del calculo
    'number' : 0      // bandera indica si empezamos un nuevo número
  });

  return (
    <div class="grid-container">
      <Display values={values} />
      <div className='grid-panel-numeros'>
        <NumberBtns values={values} setValues={setValues} />
      </div>
      <div className='grid-panel-borrador'>
        <BorradorBtn values={values} setValues={setValues}/> 
      </div>
      <div className='grid-panel-igual'>
        <ResultBtns values={values} setValues={setValues} />
      </div>
      <div className='grid-panel-operadores'>
        <OperatorBtns values={values} setValues={setValues} />
      </div>
    </div>
  );
}

export default App;
