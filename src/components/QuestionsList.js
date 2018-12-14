import React from 'react';


const QuestionsList = (props) => {
  
  const answerType = props.data.map((answers) => {
    if(answers.type === 'checkbox'){
      return(
        <div className="form-check" key={answers.id}>
          <input type="checkbox" className="form-check-input" id="ckeckbox" />
          <label className="form-check-label" htmlFor="checkbox">{answers.answers}</label>
        </div>
      );
      
      // answers.answers.forEach((answer) => {
      //   console.log(answer)
      //   return(
      //     <div class="form-group form-check">
      //       <input type="checkbox" class="form-check-input" id="ckeckbox" />
      //       <label class="form-check-label" htmlFor="checknox">{answer}</label>
      //     </div>
      //   );
      // });
    }else if(answers.type === 'radio-button'){
      return answers.answers.forEach((answer) => {
        console.log(answer)
        return(
          <div className="form-check">
            <input type="radio" className="form-check-input" id="radio" />
            <label className="form-check-label" htmlFor="radio">{answer}</label>
          </div>
        );
      }); 
    }
  });

  const questions = props.data.map((question) => {
    console.log(answerType)
    return(
      <div className="text-center" key={question.id}>
        <label>{question.question}</label>
        <div className="row">
          <div className="col-6">
            {answerType}
          </div>
        </div>
      </div>
      );
    });
    
    return (
      <div className="row">
      <div className="col-12">
        <form>
          <div className="form-group">
            {questions}
          </div>
          <div className="btn-group float-right" role="group">
            <button type="submit" className="btn btn-warning">Очистить форму</button>
            <button type="submit" className="btn btn-primary">Завершить</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionsList;
