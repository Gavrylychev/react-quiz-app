import React, { Component } from 'react';
import { questionsData } from '../questions-data/QuestionsData';
import QuestionItem from './QuestionItem';
import ButtonSubmit from './inputs/ButtonSubmit';
import ButtonClear from './inputs/ButtonClear';
import './QuestionList.css';

class QuestionsList extends Component {
  state = {
    formAnswers: {
      selectedCheckbox: []
    }
  }

  onInputClear = () => { 
    document.getElementById("quiz-form").reset();
    this.setState({
      formAnswers: {
        selectedCheckbox: []
      }
    });
  }

  handleCompareAnswers = () => {
    let formAnswers = { ...this.state.formAnswers }; 
    
    let results = questionsData.map(data => {
      return Object.values(data.correct)
    });
    
    let newFormAnswers = [];
    let newData = Object.values(formAnswers).map(answer => {
      if(!Array.isArray(answer)) {
        return newFormAnswers.push([answer])
      }
      return newFormAnswers.push(answer)
    });

    let answers = []
    let res = results.map((res, i) => {
      if(res.length > 1) {
        return res.map(q => {
         return newFormAnswers.map((answer) => {
            if(answer.length > 1) {
              if(answer.includes(q)) {
                if(!answers[i] || !answers[i]['success']) {
                  answers[i] = { success: [] };
                }              
                answers[i]['success'].push(q);
              }
            } 
            if(answer[0] == q) {
              answers.push({ success: answer });
            }
          })
        })
      }
    })
    console.log(answers)
  }
    
  onInputSubmit = (e) => {
    e.preventDefault();
    // this.props.history.push('/result');
    this.handleCompareAnswers(e);
  }

  onInputChange = (e) => {
    let formAnswers = { ...this.state.formAnswers };
    if (e.target.name === 'parseInt') {
      let selectedArr = this.state.formAnswers.selectedCheckbox;
      if(e.target.checked !== false){
        formAnswers['selectedCheckbox'] = selectedArr.concat(e.target.value);
      } else {
        formAnswers['selectedCheckbox'] = selectedArr.filter((value) => value !== e.target.value);
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
      <div className="row">
        <form id="quiz-form" onSubmit={this.onInputSubmit}>
          <div className="col-12">
            {questions}
            <ButtonClear onInputClear={this.onInputClear}/>
            <ButtonSubmit onInputSubmit={this.onInputSubmit}/>
          </div>
        </form>
      </div>
    )
  }
}

export default QuestionsList;