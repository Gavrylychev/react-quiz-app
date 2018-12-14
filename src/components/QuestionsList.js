import React from 'react';
import QuestionItem from './QuestionItem';


const QuestionsList = (props) => {
  const questions = props.data.map((question) => {
    return <QuestionItem data={question} key={question.id}/>
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
