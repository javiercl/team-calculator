import { React, useState} from 'react';

import Display from "./Display";
import NumberBtns from "./NumberBtns";
import OperatorBtns from "./OperatorBtns";
import ResultBtns from "./ResultBtns";
import SpecialBtns from "./SpecialBtns";


function App() {

  

  const [values, setValues] = useState({
    'result' : '0',   // valor que va en el display
    'value' : '',     // número actual
    'value_aux' : 0,  // valor 2 de una operacion
    'operator' : '',  // operador del calculo
    'number' : 0      // bandera indica si empezamos un nuevo número
  });

  return (
    <div class="bodycalc">
      <div className='main-container' >

      <Display values={values} />
      <NumberBtns values={values} setValues={setValues} />
      <OperatorBtns values={values} setValues={setValues} />
      <ResultBtns values={values} setValues={setValues} />
      <SpecialBtns values={values} setValues={setValues} />

      </div>
    </div>
  );
}

export default App;
