import React, { Component } from 'react';
import { questionsData } from "./questions-data/QuestionsData";
import QuestionsList from "./components/QuestionsList";
import AnswersPage from "./components/ResultPage";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        totalResult: 110,
        isAnswered: false,
        userResult: 0
      }
      
      // this.handleFormSubmit = this.handleFormSubmit.bind(this);
      // this.handleClearForm = this.handleClearForm.bind(this);
    }
    // handleFormSubmit(){
      //
      // }
      //
      // handleClearForm(){
        //
        // }
        
  render() {
    this.props = { data : questionsData };

    return (
      <div className="container">
          <QuestionsList data={this.props.data}/>
          <AnswersPage result={this.props.data}/>
        </div>
    );
  }
}

export default App;
