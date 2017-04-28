import React, { Component } from 'react';
import Nav from './components/Nav';
import List from './components/List';
const styles = require('./App.css');

class App extends Component<any, any> {
  render() {
    return (
      <div className={styles.App}>
        <header>
          <Nav />
          <p className={styles.introPhrase}>
            안녕하세요. <b>UI 디자이너</b> 임채림입니다.
          </p>
        </header>
        <div className={styles.body}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
