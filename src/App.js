import React, { Component } from 'react';
import StartPage from './components/StartPage';
import QuestionsList from "./components/QuestionsList";
import ResultPage from './components/ResultPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Switch>
            <Route path="/" exact component={StartPage}/>
            <Route path='/questionslist' exact component={QuestionsList}/>
            <Route path='/result' exact component={ResultPage}/>
          </Switch>               
      </div>
    );
  }
}

export default App;
