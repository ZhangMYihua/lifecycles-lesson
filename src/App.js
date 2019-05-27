import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './lifecycles.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: ''
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                text: state.text + '_hello'
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
