import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
const styles = require('./App.css');

class App extends Component<any, any> {
  render() {
    return (
      <div className={styles.App}>
        <Nav />

        <div className={styles.body}>
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
