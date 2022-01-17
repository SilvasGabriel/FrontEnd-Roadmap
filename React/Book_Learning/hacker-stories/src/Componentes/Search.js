import React from "react";

const InputWithLabel = ({id, children, value, onInputChange, type = 'text'}) => {
  
  
  return (
    <>
      <label htmlFor={id}>{children}: </label>
      <input 
      id={id}
      value={value} 
      type={type} 
      onChange={onInputChange} />
      
      <p>Searching for <strong>{value}</strong> </p>

    </>
  )
};

export default InputWithLabel;
