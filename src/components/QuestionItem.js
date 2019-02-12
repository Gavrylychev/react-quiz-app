import React from 'react';
import InputItem from './inputs/InputItem';
import InputTextItem from './inputs/InputTextItem';
import SelectItem from './inputs/SelectItem';

const QuestionItem = ({ answers, type, onInputChange, name }) => {
  return (
    <div className="row myBorder">
        { answers.map((answer, index) => { if(type === "checkbox" || type === "radio") { 
                                      return <div key={answer.label} className="col-12">
                                                <InputItem 
                                                  type={type} 
                                                  label={answer.label}
                                                  onInputChange={onInputChange}
                                                  name={name}/>
                                                {answer.label}
                                              </div>
                                      } else {
                                        return <div key={answer.label} className="col-12">
                                                  {answer.label}
                                                </div>
                                      }                                     
                                  }) 
        }
        { type === "text" && <InputTextItem 
                                onInputChange={onInputChange} 
                                name={name} /> }
        { type === "select" && <SelectItem 
                                  answers={answers} 
                                  onInputChange={onInputChange} 
                                  name={name} /> }
    </div>
  )
}

export default QuestionItem;