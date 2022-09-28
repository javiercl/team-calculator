import React from 'react';
import './Design.css';

const Display = (props) => (
  
    <div className='grid-item-display'>
      { props.values.result }
    </div>
  );


export default Display;
