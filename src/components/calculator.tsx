import React, {useState, useEffect, MouseEventHandler} from 'react';
import "../styles.css"

function Calculator() {
  const MAX: number = 9;
  const [calculatorValues, setcalculatorValues] = useState({
    sliderValue:3,
    input:"",
    history:"",
    operator:"",
  });

  useEffect(()=>{
  })
  function handleSlider(event:React.ChangeEvent<HTMLInputElement>){
    const num: number = Number(event.target.value);
    const calculatorValuesClone = {...calculatorValues};
    calculatorValuesClone.sliderValue = num;
    setcalculatorValues(calculatorValuesClone);
  }
  function handleInputButton(){
    const calculatorValuesClone = {...calculatorValues};
    calculatorValuesClone.input += calculatorValuesClone.sliderValue.toString();
    setcalculatorValues(calculatorValuesClone);
  }
  function handleClearButton(){
    const calculatorValuesClone = {...calculatorValues};
    calculatorValuesClone.input = '';
    calculatorValuesClone.history = '';
    calculatorValuesClone.operator = '';
    setcalculatorValues(calculatorValuesClone);
  }

  function handleResetOutput(){
    const calculatorValuesClone = {...calculatorValues};
    calculatorValuesClone.history = calculatorValuesClone.input;
    calculatorValuesClone.input = '';
    setcalculatorValues(calculatorValuesClone);
  }

  function handleOperate(symbol:string) {
    const calculatorValuesClone = {...calculatorValues};
    console.log(calculatorValuesClone.history)
    console.log(calculatorValuesClone.input)
    if ((calculatorValuesClone.history !== '') && (calculatorValuesClone.input !== '')) {
      if (calculatorValuesClone.operator !== '' && calculatorValuesClone.input !== '') {
        switch (calculatorValuesClone.operator) {
          case '+':
            calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) + parseInt(calculatorValuesClone.input)).toString()
            calculatorValuesClone.history = ''
            
            break
          case '-':
            calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) - parseInt(calculatorValuesClone.input)).toString()
            calculatorValuesClone.history = ''
            
            break
          case '*':
            calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) * parseInt(calculatorValuesClone.input)).toString()
            calculatorValuesClone.history = ''
            
            break
          case '/':
            calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) / parseInt(calculatorValuesClone.input)).toString()
            calculatorValuesClone.history = ''
            
            break
        }
      }
    }
    // { console.log("whent trhough")
    //   handleCalculate()}
    
    
    switch (symbol) {
      case '+':
        calculatorValuesClone.operator = '+'
        break
      case '-':
        calculatorValuesClone.operator = '-'
        break
      case '*':
        calculatorValuesClone.operator = '*'
        break
      case '/':
        calculatorValuesClone.operator = '/'
        break
    }
    calculatorValuesClone.history = calculatorValuesClone.input;
    calculatorValuesClone.input = '';
    setcalculatorValues(calculatorValuesClone);
  }

  function handleCalculate () {
    const calculatorValuesClone = {...calculatorValues};
    if (calculatorValuesClone.operator !== '' && calculatorValuesClone.input !== '') {
      switch (calculatorValuesClone.operator) {
        case '+':
          calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) + parseInt(calculatorValuesClone.input)).toString()
          calculatorValuesClone.history = ''
          setcalculatorValues(calculatorValuesClone);
          break
        case '-':
          calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) - parseInt(calculatorValuesClone.input)).toString()
          calculatorValuesClone.history = ''
          setcalculatorValues(calculatorValuesClone);
          break
        case '*':
          calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) * parseInt(calculatorValuesClone.input)).toString()
          calculatorValuesClone.history = ''
          setcalculatorValues(calculatorValuesClone);
          break
        case '/':
          calculatorValuesClone.input = (parseInt(calculatorValuesClone.history) / parseInt(calculatorValuesClone.input)).toString()
          calculatorValuesClone.history = ''
          setcalculatorValues(calculatorValuesClone);
          break
      }
    }
  }
  return (
    <>
      <div className="container">
        <div className="output-container">
          <h2><span id="outputValue">{calculatorValues.input}</span></h2>
        </div>
        <div className="slider-container">
          <input type="range" min="0" max={MAX} onChange={handleSlider} value={calculatorValues.sliderValue} className="slider" id="myRange">
          </input>
          <button id="input-button" className="grid-button" onClick={handleInputButton}>Input</button>
        </div>
        <div className="clear-container">
          <button id="clear-button" className="grid-button" onClick={handleClearButton}>C</button>
        </div>
        <div className="multiply-container">
          <button id="multiply-button" className="grid-button" onClick={() => handleOperate('*')}>x</button>
        </div>
        <div className="divide-container">
          <button id="divide-button" className="grid-button" onClick={() => handleOperate('/')}>/</button>
        </div>
        <div className="subtract-container">
          <button id="substract-button" className="grid-button" onClick={() => handleOperate('-')}>-</button>
        </div>
        <div className="add-container" >
          <button id="add-button" className="grid-button" onClick={() => handleOperate('+')}>+</button>
        </div>
        <div className="history-container">
          <h2><span id="historyValue">{calculatorValues.history}</span></h2>
        </div>
        <div className="slideValue-container">
          <h2><span id="slideValue">{calculatorValues.sliderValue}</span></h2>
        </div>
        <div className="equals-container">
          <button id="equals-button" className="grid-button" onClick={() => handleCalculate()}>=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
