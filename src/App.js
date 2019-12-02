import React from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      score:[
        {
          ball: 0,
          strike: 0,
          foul: 0
        }
      ]
    }
  }

  addBall = () =>{
    this.setState({
      score: [
        {
          ball: ball++
        }
      ]
    })
  }

  render(){
    return (
      <>
      <Display score={this.state.score} />
      <Dashboard addBall={this.addBall} />
      </>
    )
  }
}

export default App;