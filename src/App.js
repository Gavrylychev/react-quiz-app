import React, { Component } from 'react';
import { questionsData } from "./questions-data/QuestionsData";
import QuestionsList from "./components/QuestionsList";
import AnswersPage from "./components/ResultPage";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        totalResult: 110,
        userResult: 0,
        isSelectedRadio: false,
        inputValue: '',
    }
      
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChangeInput(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  handleFormSubmit(){
    
  }
  
  handleClearForm(){
    
  }
        
  render() {
    this.props = { data : questionsData };

    return (
      <div className="container">
          <QuestionsList data={this.props.data} 
                         inputValue={this.state.inputValue} 
                         handleChangeInput={this.handleChangeInput}/>
          <AnswersPage data={this.props.data}/>
        </div>
    );
  }
}

export default App;
