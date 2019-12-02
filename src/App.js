import React from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import './App.css';

export const testaddCount = (score, target) =>{
  let newScore = score;
  console.log('test here', newScore, target)
  if (target === 'ball'){
    console.log ('Adding ball')
    if (newScore.ball === 3 ){
      newScore.ball = 0;
      newScore.strike = 0;
      newScore.foul = 0;
    }else {
      newScore.ball++;
      console.log('ball is now',newScore.ball)
    }
  }
  if (target === 'strike'){
    console.log ('Adding strike')
    if (newScore.strike === 2 ){
      newScore.ball = 0;
      newScore.strike = 0;
      newScore.foul = 0;
    }else {
      newScore.strike++;
    }
  }
  if (target === 'foul'){
    console.log ('Adding foul')
    if (newScore.strike < 2 ){
      newScore.strike++
      newScore.foul++
    }else {
      newScore.foul++
    }
  }
  if (target === 'hit'){
    newScore.ball = 0;
    newScore.strike = 0;
    newScore.foul = 0;
  }
  return (newScore)
}

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
    let newScore = this.state.score
    if (target === 'ball'){
      console.log ('Adding ball')
      if (newScore.ball === 3 ){
        newScore.ball = 0;
        newScore.strike = 0;
        newScore.foul = 0;
      }else {
        newScore.ball++;
      }
    }
    if (target === 'strike'){
      console.log ('Adding strike')
      if (newScore.strike === 2 ){
        newScore.ball = 0;
        newScore.strike = 0;
        newScore.foul = 0;
      }else {
        newScore.strike++;
      }
    }
    if (target === 'foul'){
      console.log ('Adding foul')
      if (newScore.strike < 2 ){
        newScore.strike++
        newScore.foul++
      }else {
        newScore.foul++
      }
    }
    if (target === 'hit'){
      newScore.ball = 0;
      newScore.strike = 0;
      newScore.foul = 0;
    }
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