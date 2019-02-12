import React, { Component } from 'react';
import { questionsData } from '../questions-data/QuestionsData';
import QuestionItem from './QuestionItem';
import './QuestionList.css';

class QuestionsList extends Component {
  state = {
    formAnswers: {
      selectedCheckbox: []
    }
  }

  onInputChange = (e) => {
    let formAnswers = { ...this.state.formAnswers };
    if (e.target.name === 'parseInt') {
      let selectedArr = this.state.formAnswers.selectedCheckbox;
      formAnswers['selectedCheckbox'] = selectedArr.concat(e.target.value)
      
      if(formAnswers.selectedCheckbox.length === -1) {
        return formAnswers.selectedCheckbox;
      } else if (formAnswers.selectedCheckbox[e.target.value] === e.target.value){
        return selectedArr.concat(selectedArr.slice(1))
      }
      
    } else {
      formAnswers[e.target.name] = e.target.value;
    }
    this.setState({
      formAnswers
    });
  }

  render() {
    const questions = questionsData.map((question) => {
      return (
        <React.Fragment key={question.id}>
          <div className="text-center myMargin">{question.question}</div>
          <QuestionItem answers={question.answers}
            type={question.type}
            onInputChange={this.onInputChange}
            name={question.name}
          />
        </React.Fragment>
      )
    });


    return (
      <div className="col-12">
        {questions}
      </div>
    )
  }
}

export default QuestionsList;