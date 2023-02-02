import React from 'react';
import Header from './components/header';
import Calculator from './components/calculator';
import "./styles.css"
function App() {
  return (
    <>
      <Header/>
      <div className='calculator-container'>
        <Calculator/>

      </div>
    </>
  );
}

export default App;
