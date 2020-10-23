import React from 'react';
import logo from './logo.svg';
import './App.css';

class EquationField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      equation: '',
    };
  }

  render() {
    return (
      <div>
        <input type="text"></input>
      </div>
    );
  }
}

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.value);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick.bind(this, this.props.value)}>{this.props.display}</button>
      </div>
    )
  }
}

class Calculator extends React.Component {
  render() {
    const test = "test";
    return (
      <div>
          <table id="visual-calculator">
              <tbody>
                  <tr>
                      <td><CalculatorButton
                          value="1"
                          display="1" />
                      </td>
                      <td><CalculatorButton
                          value="2"
                          display="2" />
                      </td>
                      <td><CalculatorButton
                          value="3"
                          display="3" />
                      </td>
                      <td><CalculatorButton
                          value=" + "
                          display="+" />
                      </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="4"
                          display="4" />
                      </td>
                      <td><CalculatorButton
                          value="5"
                          display="5" />
                      </td>
                      <td><CalculatorButton
                          value="6"
                          display="6" />
                      </td>
                      <td><CalculatorButton
                          value=" - "
                          display="-" />
                      </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="7"
                          display="7" />
                      </td>
                      <td><CalculatorButton
                          value="8"
                          display="8" />
                      </td>
                      <td><CalculatorButton
                          value="9"
                          display="9" />
                      </td>
                      <td><CalculatorButton
                          value=" * "
                          display="x" />
                      </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="0"
                          display="0" />
                      </td>
                      <td><CalculatorButton
                          value=" / "
                          display="÷" />
                      </td>
                      <td><CalculatorButton
                          value=" = "
                          display="=" />
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    )
  }
}

export default Calculator;
