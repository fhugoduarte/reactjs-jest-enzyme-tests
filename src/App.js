import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <div className={`clicks-${count}`}>
          {count} clicks
        </div>
        <button id="increment" onClick={() => { this.setState({ count: count + 1 }); }}>
          Increment
        </button>
        <button id="decrement" onClick={() => { this.setState({ count: count - 1 }); }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
