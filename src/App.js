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
          {count} click
        </div>
        <button onClick={() => { this.setState({ count: count + 1 }); }}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
