import React from 'react';

const QuestionItem = (props) => {    
    console.log(props)
    const questions = props.data.map((question) => {
        return(
          <div className="text-center" key={question.id}>
            <label>{question.question}</label>
            <div className="row">
              <div className="col-6">
                {question.answers.map((answer)=>{
                    if(answer.type === 'checkbox'){
                        console.log(answer.type)
                        return (
                            <div className="form-check" key={answer.id}>
                                <input type="checkbox" className="form-check-input" id="ckeckbox" />
                                <label className="form-check-label" htmlFor="checkbox">{answer}</label>
                            </div>
                        );
                    }else{return null}
                })}
              </div>
            </div>
          </div>
        );
    });  

    return questions;
}

export default QuestionItem;