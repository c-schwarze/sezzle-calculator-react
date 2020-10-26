import React from 'react';
import logo from './logo.svg';
import './App.css';


class CalculatorButton extends React.Component {
  render() {
    return (
      <div>
      <button type="button" onClick={() => this.props.action(this.props.value)}>{this.props.display}</button>
      </div>
    )
  }
}

class History extends React.Component {
  render() {
    return (
      <div>
        <h1>History</h1>
        <ul>
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
          <table id="visual-calculator">
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
                          value=" / "
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
                          value=" * "
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
                          value=" - "
                          display="-"
                          action={this.props.addToEquation} />
                      </td>
                  </tr>
                  <tr>
                      <td><CalculatorButton
                          value="0"
                          display="0"
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          value="."
                          display="."
                          action={this.props.addToEquation} />
                      </td>
                      <td><CalculatorButton
                          display="="
                          action={this.props.calculate} />
                      </td>
                      <td><CalculatorButton
                          value=" + "
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
    this.setState({
      equation: this.state.equation + newValue
    })
  }

  clearEquation() {
    this.setState({
      equation: ""
    })
  }

  calculate() {
    const oldHistory = [...this.state.history];
    // get new newValue
    const newValue = eval(this.state.equation)
    // add new value to the history
    oldHistory.unshift(this.state.equation + " = " + newValue)

    if( oldHistory.length > 10 ){
      // remove the end value
      oldHistory.pop()
    }

    this.setState({
      history: oldHistory
    })
  }

  render() {
    return (
      <div>
          <input type="text" placeholder="Enter your equation" value={this.state.equation}></input>
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
