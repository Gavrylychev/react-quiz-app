import React from 'react';

const SelectItem = ({ answers, onInputChange, name }) => {
  return (  
    <select className="custom-select" 
            onChange={onInputChange}
            name={name}>
      {answers.map((option) => <option key={option.label}>{option.label}</option>)}
    </select>
  )
}

export default SelectItem;