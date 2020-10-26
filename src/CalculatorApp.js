import React from 'react';
import './CalculatorApp.css';

function CalculatorIntro() {
  return (
    <div>
      <h1>Sezzle Calculator</h1>
      <p>by Caleb Schwarze</p>
      <p>Welcome to my Sezzle Calculator. Either type in an equation using numbers and the 4 basic operators, or
      use the visual calculator to aid you in creating the equation. Push the equals button to
      send the equation to be processed.</p>
    </div>
  )
}

class CalculatorButton extends React.Component {
  render() {
    return (
      <div class="btn-container">
      <button type="button" class="btn-calculator" onClick={() => this.props.action(this.props.value)}>{this.props.display}</button>
      </div>
    )
  }
}

class History extends React.Component {
  render() {
    return (
      <div>
        <h1>Recent Calculations</h1>
        <ul class="history-list">
        {this.props.history.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
        </ul>
      </div>
    )
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
          <table class="calculator">
              <tbody>
                  <tr>
                    <td colspan="4"><CalculatorButton
                        display="Clear"
                        action={this.props.clearEquation} />
                    </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="7"
                          display="7"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="8"
                          display="8"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="9"
                          display="9"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="/"
                          display="÷"
                          action={this.props.addToEquation} />
                      </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="4"
                          display="4"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="5"
                          display="5"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="6"
                          display="6"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="*"
                          display="x"
                          action={this.props.addToEquation} />
                      </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="1"
                          display="1"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="2"
                          display="2"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="3"
                          display="3"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="-"
                          display="-"
                          action={this.props.addToEquation} />
                      </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="."
                          display="."
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="0"
                          display="0"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          display="="
                          action={this.props.calculate} />
                      </td>
                      <td><CalculatorButton
                          value="+"
                          display="+"
                          action={this.props.addToEquation} />
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    )
  }
}


class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.addToEquation = this.addToEquation.bind(this);
    this.clearEquation = this.clearEquation.bind(this);
    this.calculate = this.calculate.bind(this);

    this.state = {
      equation: '',
      history: [],
    };
  }

  addToEquation(newValue) {
    // if newvalue is a number or a decimal, add it always.
    if( !isNaN(newValue) || newValue == '.' ) {
      this.setState({
        equation: this.state.equation + newValue
      })
    // if its not a number and the last one is not a number (operator), then replace
    } else if( isNaN(newValue) && isNaN(this.state.equation[this.state.equation.length - 1]) ) {
      this.setState({
        equation: this.state.equation.slice(0, -1) + newValue
      })
      // just add whatever else remains - should be the symbols adding to numbers.
    } else {
      this.setState({
        equation: this.state.equation + newValue
      })
    }
  }

  clearEquation() {
    this.setState({
      equation: ""
    })
  }

  calculate() {
    let equation = this.state.equation;
    // if the last thing is a operator or a decimal, remove it!
    if( isNaN(equation[equation.length - 1]) ){
        equation = equation.slice(0, -1);
    }
    const oldHistory = [...this.state.history];
    // get new newValue
    const newValue = eval(equation);
    // add new value to the history
    oldHistory.unshift(equation + " = " + newValue);

    if( oldHistory.length > 10 ){
      // remove the end value
      oldHistory.pop()
    }

    this.setState({
      history: oldHistory,
      equation: '',
    })
  }

  render() {
    return (
      <div>
          <CalculatorIntro />
          <input type="text" class="equation-field" placeholder="Enter your equation" value={this.state.equation}></input>
          <Calculator
            addToEquation={this.addToEquation}
            clearEquation={this.clearEquation}
            calculate={this.calculate}
          />
          <History history={this.state.history}/>
      </div>
    )
  }
}

export default CalculatorApp;
