import React from 'react';
import QuestionItem from './QuestionItem';


const QuestionsList = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <form>
          <div className="form-group">
            <QuestionItem data={props.data}/>
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
