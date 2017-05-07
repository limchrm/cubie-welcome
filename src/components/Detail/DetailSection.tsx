import React, { StatelessComponent } from 'react';
const styles = require('./Detail.css');

const DetailSection: StatelessComponent<any> = ({ children }) => {
  return (
    <section className={styles.section}>
      {children}
    </section>
  );
}

export default DetailSection;
