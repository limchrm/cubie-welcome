import React, { Component } from 'react';
const styles = require('./App.css');

class App extends Component<any, any> {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <div>
          </div>
          <h2>WELCOME TO<br/>THE CUBIE LAND</h2>
        </div>
        <p className={styles['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
