import React from 'react';

const InputTextItem = ({ onInputChange, name }) => {
  return (
   <input   type="text" 
            className="form-control" 
            placeholder="Впишите ответ без ошибок как в ответах выше" 
            onChange={onInputChange}
            name={name}/>
  )
}

export default InputTextItem;