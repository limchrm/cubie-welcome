import React, { Component } from 'react';
const styles = require('./Nav.css');

class Nav extends Component<any, any> {
  render() {
    return (
      <nav className={styles.nav}>
        <a className={styles.toAbout} href="/about">
          ABOUT
        </a>
        <a className={styles.toHome} href="/">
          CHRM
        </a>
        <a className={styles.toWorks} href="/works">
          WORKS
        </a>
      </nav>
    );
  }
}

export default Nav;