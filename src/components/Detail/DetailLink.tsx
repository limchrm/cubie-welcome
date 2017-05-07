import React, { StatelessComponent } from 'react';
const styles = require('./Detail.css');

interface DetailLinkProps {
  label: string;
  url: string;
}
const DetailLink: StatelessComponent<DetailLinkProps> = ({ label, url }) => {
  return (
    <a
      className={styles.link}
      href={url}
      target="_blank"
    >
      {label}
    </a>
  );
}

export default DetailLink;
