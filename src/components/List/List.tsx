import React, { Component, StatelessComponent } from 'react';
import classNames from 'classnames';
import works, { worksProps } from './works';
const styles = require('./List.css');

const ListItem: StatelessComponent<worksProps> = props => (
  <article className={styles.item}>
    <div
      className={styles.thumb}
      style={{ backgroundImage: `url(${props.thumbnailUrl})` }}
    />
    <div className={styles.text}>
      <img
        className={styles.bi}
        src={require('../../common/images/bi-finda.svg')}
        alt={props.title}
      />
      <h3>{props.description}</h3>
      <ul className={styles.tags}>
        {props.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a className={styles.link} href={props.url}>VIEW DETAIL</a>
    </div>
  </article>
);

class List extends Component<any, any> {
  render() {
    return (
      <div className={styles.list}>
        {works.map((work, i) => (
          <ListItem
            key={i}
            title={work.title}
            description={work.description}
            url={work.url}
            thumbnailUrl={work.thumbnailUrl}
            tags={work.tags}
          />
        ))}
      </div>
    );
  }
}

export default List;
