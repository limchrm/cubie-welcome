import React, { Component } from 'react';
import Nav from './components/Nav';
import List from './components/List';
const styles = require('./App.css');

class App extends Component<any, any> {
  render() {
    return (
      <div className={styles.App}>
        <Nav />
        <div className={styles.body}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
