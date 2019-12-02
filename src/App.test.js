import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App, {testaddCount} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const newScore = {
  ball: 0,
  strike: 0,
  foul: 0
  }

test('adds ball', () => {
  expect(testaddCount(newScore, 'ball')).toStrictEqual({
    ball: 1,
    strike: 0,
    foul: 0
  });
})