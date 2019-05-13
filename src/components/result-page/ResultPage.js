import React, { Component } from 'react';

class AnswersPage extends Component {
  state = {
    data: [],
    correct: 7,
    counter: 0
  }

  componentDidMount() {
    let value = window.localStorage.getItem('correct');
    if (value) {
      this.setState({ data: JSON.parse(value) });
    }
  }

  render() {
    // console.log(this.state.data)
    let data = [...this.state.data];
    let count = this.state.counter;
  
    let answers = data.map((elem, i) => {
      if (elem && !Array.isArray(Object.values(elem)[0])) {
        count++
        return <div key={i} className="r">
          {elem.success || null}
        </div>
      } else {
         return elem && elem.success.map((e,z) => {
          count++
          return <div key={z}>{e}</div>
        })
      }
    })

    return (
      <div className="row">
        <div className="col-12 text-center">
          <i className="fas fa-hand-point-down" style={{ marginRight: '10px'}}></i> 
          You have {count} right answers out of {this.state.correct} 
          <i className="fas fa-hand-point-down" style={{ marginLeft: '10px'}}></i>
          <hr/>
          {answers}
        </div>
      </div>
    );
  }

}

export default AnswersPage;
