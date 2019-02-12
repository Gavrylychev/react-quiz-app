import React, { Component } from 'react';
import QuestionsList from "./components/QuestionsList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <QuestionsList />
        </div>
      </div>
    );
  }
}

export default App;
