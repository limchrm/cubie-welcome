import React, { Component } from 'react';
import { Link } from 'react-router';
const styles = require('./Nav.css');

class Nav extends Component<any, any> {
  render() {
    return (
      <nav className={styles.nav}>

        <Link className={styles.toHome} to="/">
          CHRM
        </Link>

        <Link className={styles.toAbout} to="/about">
          ABOUT
        </Link>

        <Link className={styles.toWorks} to="/">
          WORKS
        </Link>

      </nav>
    );
  }
}

export default Nav;