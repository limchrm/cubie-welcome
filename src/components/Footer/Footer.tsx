import React, { Component } from 'react';
import { Link } from 'react-router';
const styles = require('./Footer.css');

class Footer extends Component<any, any> {
  render() {
    const year = new Date().getFullYear();

    return (
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          Copyright © {year} CHRM, All Rights Reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
