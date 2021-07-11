
import React, { useState } from 'react';
import words from 'lodash.words';
import Function from './components/Function/src';
import MathOperations from './components/MathOperation/src';
import Result from './components/Result/src';
import Number from './components/Number/src';
import './css/App.css';

const App = () => {

  const rotationFunction = stack => {
    const newArray = stack.split('');
    newArray.push(newArray.shift());
    return newArray.join('');
  }

  const [stack, setStack] = useState('');

  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length-1] : '0';

  return (
    <main className='react-calculator'>
      <Result value={value} />
      <Number onClickNumber={number => setStack(`${stack}${number}`)}></Number>
      <Function 
        onContentClear={() => {
          setStack('')
        }}
        onDelete={() => {
          if(stack.length > 0){
            const newStack = stack.substring(0, stack.length-1)
            setStack(newStack)
          }
        }}
        rotation={() => {
          setStack(rotationFunction(stack));
        }}
      />
      <MathOperations 
        onClickOperations={operation => {
          setStack(`${stack}${operation}`)
        }}
        onClickEquals={equal => {
          // eslint-disable-next-line no-eval
          setStack(eval(stack).toString())
        }}
      />
    </main>
  );
}

export default App;
