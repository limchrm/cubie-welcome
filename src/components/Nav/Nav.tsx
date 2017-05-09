import React, { Component } from 'react';
import { Link } from 'react-router';
const styles = require('./Nav.css');

class Nav extends Component<any, any> {
  render() {
    return (
      <nav className={styles.nav}>

        {/*
        <Link className={styles.toAbout} to="/about">
          ABOUT
        </Link>
        */}

        <Link className={styles.toHome} to="/">
          CH
          RM
        </Link>

        {/*
        <Link className={styles.toWorks} to="/works">
          WORKS
        </Link>
        */}

      </nav>
    );
  }
}

export default Nav;
