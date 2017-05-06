import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';
import { DetailProps } from './Detail';
const styles = require('./Detail.css');

const DetailNav: StatelessComponent<DetailProps> = ({ workNumber }) => {
  return (
    <nav className={styles.nav}>
      <span className={styles.backButton}>뒤로</span>
      <h1>{works[workNumber - 1].title}</h1>
    </nav>
  );
}

export default DetailNav;
