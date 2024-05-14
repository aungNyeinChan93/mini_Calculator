import React from 'react';
import "./ButtonGroup.css";

const ButtonGroup = ({clickEventHandler}) => {
  
  return (
    <div className='btn-container'>
      <div className="btn-group">
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>C</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>(</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>)</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>~</button>
      </div>
      <div className="btn-group">
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>7</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>8</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>9</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>+</button>
      </div>
      <div className="btn-group">
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>4</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>5</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>6</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>-</button>
      </div>
      <div className="btn-group">
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>1</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>2</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>3</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>*</button>
      </div>
      <div className="btn-group">
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>.</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>0</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>00</button>
        <button className='btn ' onClick={(e)=>clickEventHandler(e.target.innerHTML)}>/</button>
      </div>
      <div className="btn-group">
      </div>
        <button className='btn btn-equal'  onClick={(e)=>clickEventHandler(e.target.innerHTML)}>=</button>
    </div>
  )
}

export default ButtonGroup;
