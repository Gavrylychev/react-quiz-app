import React from 'react';

const QuestionItem = (props) => {
    let answers;
    if(props.data.type === 'select'){
        const options = props.data.answers.map((option)=>{
            return(
                <option key={option}>{option}</option>
            );
        });
        answers = (
            <select className="form-control" multiple>
                {options}
            </select>
        );
    }else if(props.data.type === 'input-field'){
        const answer = props.data.answers.map((answer) => {
            return(
                 <div className='col-6' key={answer}>
                     <label>{answer}</label>
                 </div>
            );
        });
        answers = (
            <div className='row'>
                {answer}
                <div className='col-12'>
                    <input type="text" 
                    className="form-control" 
                    placeholder='Введите ответ любым регистром и без ошибок(точно как в ответах выше)' />
                </div>
            </div>
        );
    }else if(props.data.type === 'checkbox'){
        const answer = props.data.answers.map((answer)=>{
            return(
                <div key={answer}>
                    <input type="checkbox" className="form-check-input" id="ckeckbox" />
                    <label className="form-check-label" htmlFor="checkbox">{answer}</label>
                </div>
            );
        });
        answers = (
            <div className='form-check'>
                {answer}
            </div>
        );
    }else if(props.data.type === 'radio-button'){
        const answer = props.data.answers.map((answer)=>{
            return (
                <div key={answer}>
                    <input type="radio" className="form-check-input" id="radio" value={answer} />
                    <label className="form-check-label" htmlFor="radio">{answer}</label>
                </div>
            );
        });
        answers = (
            <div className='form-check'>
                {answer}
            </div>
        );
    }else{return null}

    return(
        <div className="form-group" key={props.data.id}>
            <div className='text-center'>
                <label>{props.data.question}</label>
            </div>
            {answers}
        </div>
    );
}

export default QuestionItem;