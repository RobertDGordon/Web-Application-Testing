import React from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      score:
        {
          ball: 0,
          strike: 0,
          foul: 0
        }
    }
  }

    addCount = (target) =>{
    console.log ('add target',target)
    let newScore = this.state.score
    if (target === 'ball'){
      console.log ('Adding ball')
      newScore.ball++
    }
    console.log (newScore)
    return this.setState({newScore})
  }

  render(){
    return (
      <>
      <Display {...this.state} />
      <Dashboard addCount={this.addCount} {...this.state} />
      </>
    )
  }
}

export default App;