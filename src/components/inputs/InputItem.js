import React from 'react';

const InputItem = ({ type, label, onInputChange, name }) => {
  return (
      <input 
        type={type} 
        name={name} 
        value={label} 
        onChange={onInputChange}
      />
  )
}

export default InputItem;