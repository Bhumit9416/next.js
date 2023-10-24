import React, { Component } from 'react';

class EvenNumberSumCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 10, // Default value, you can change it
      sum: null,
    };
  }

  calculateSumOfEvenNumbers = () => {
    const { number } = this.state;
    let sum = 0;

    for (let i = 2; i <= number; i += 2) {
      sum += i;
    }

    this.setState({ sum });
  };

  handleNumberChange = (event) => {
    const number = parseInt(event.target.value, 10);
    this.setState({ number });
  };

  render() {
    const { number, sum } = this.state;

    return (
      <div>
        <h1>Even Number Sum Calculator</h1>
        <label>
          Enter a number:
          <input
            type="number"
            value={number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button onClick={this.calculateSumOfEvenNumbers}>Calculate Sum</button>
        {sum !== null && (
          <p>
            The sum of even numbers from 2 to {number} is {sum}.
          </p>
        )}
      </div>
    );
  }
}

export default EvenNumberSumCalculator;
