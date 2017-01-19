import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './tic-tac-toe.css';

function checkWinner(log) {
    var check = function(a,b,c) {
        return !!(a + b + c).match(/^(xxx|ooo)$/gi);
    };

    if (check(log[0], log[1], log[2])) return log[0];
    if (check(log[3], log[4], log[5])) return log[3];
    if (check(log[6], log[7], log[8])) return log[6];

    if (check(log[0], log[3], log[6])) return log[0];
    if (check(log[1], log[4], log[7])) return log[1];
    if (check(log[2], log[5], log[8])) return log[2];

    if (check(log[0], log[4], log[8])) return log[0];
    if (check(log[2], log[4], log[6])) return log[2];

    if (log.join('').length === 9) return 'd';
    return 'n';
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: 'X',
      flagLogo: ['','','','','','','','',''],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(event) {
    var index = event.target.getAttribute('data-index');
    this.setState(prevState => ({
      log: prevState.log == 'O' ? 'X' : 'O',
    }));
    this.state.flagLogo[index] = this.state.log;
    if (checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O') {
      alert(this.state.log + ' Win');
    }
  }

  handleReset() {
    this.setState({
      flagLogo: ['','','','','','','','','']
    });
  }

  table() {
    return (
      <table>
        <tr>
          <td data-index="0" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[0]}</td>
          <td data-index="1" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[1]}</td>
          <td data-index="2" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[2]}</td>
        </tr>
        <tr>
          <td data-index="3" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[3]}</td>
          <td data-index="4" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[4]}</td>
          <td data-index="5" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[5]}</td>
        </tr>
        <tr>
          <td data-index="6" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[6]}</td>
          <td data-index="7" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[7]}</td>
          <td data-index="8" onClick={checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? null : this.handleClick}>{this.state.flagLogo[8]}</td>
        </tr>
      </table>
    );
  }

  resetButton() {
    return (
      <button onClick={this.handleReset}>Reset</button>
    );
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to tic tac toe games</h2>
        </div>
        <div className="center-text">
          {this.table()}
          {checkWinner(this.state.flagLogo) == 'X' || checkWinner(this.state.flagLogo) == 'O' ? this.resetButton() : null}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
