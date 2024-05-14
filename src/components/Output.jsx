import React from 'react';
import "./Output.css"

const Output = ({output}) => {
  return (
    <div className='output-container'>
      <div className="output-text">{output}</div>
    </div>
  )
}

export default Output;
