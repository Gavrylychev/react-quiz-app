import React from 'react';

const QuestionItem = (props) => {
    const option = props.data.answers.map((option)=>{
        console.log(option)
        return(
            <option>{option}</option>
        );
    });

    const answer = props.data.answers.map((answer)=>{
        if(props.data.type === 'checkbox'){
            return (
                <div className="col-6">
                    <input type="checkbox" className="form-check-input" id="ckeckbox" />
                    <label className="form-check-label" htmlFor="checkbox">{answer}</label>
                </div>
            );
        }else if(props.data.type === 'radio-button'){
            return (
                <div className="col-6">
                    <input type="radio" className="form-check-input" id="radio" />
                    <label className="form-check-label" htmlFor="radio">{answer}</label>
                </div>
            );
        }else if(props.data.type === 'select'){
            return (
                <select class="form-control" id="exampleFormControlSelect1">
                    {option}
                </select>
            );
        }else if(props.data.type === 'input'){
            return (
                <div className="col-6">
                    <div>
                        <label className="form-check-label">{answer}</label>
                    </div>
                    <div>
                        <input type="text" className="form-check-input" />
                    </div>
                </div>
            );
        }else{return null}
    });

    return(
        <div className="text-center" key={props.data.id}>
            <label>{props.data.question}</label>
            <div className="form-check">
                <div className="row">
                {answer}
                </div>
            </div>
        </div>
    );
}

export default QuestionItem;