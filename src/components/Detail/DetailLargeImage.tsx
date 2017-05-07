import React, { StatelessComponent } from 'react';
const styles = require('./Detail.css');

interface DetailLargeImageProps {
  src: string;
  alt: string;
}
const DetailLargeImage: StatelessComponent<DetailLargeImageProps> = ({ alt, src }) => {
  return (
    <img
      className={styles.largeImg}
      src={src}
      alt={alt}
    />
  );
}

export default DetailLargeImage;
