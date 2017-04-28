import React, { Component, StatelessComponent } from 'react';
import classNames from 'classnames';
import works, { worksProps } from './works';
const styles = require('./List.css');

const ListItem: StatelessComponent<worksProps> = props => (
  <article className={styles.item}>
    <div
      className={styles.thumb}
      style={{ backgroundImage: `url(${props.thumbnailUrl})` }}
    >
      <div className={styles.text}>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <ul className={styles.tags}>
          {props.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <a className={styles.link} href={props.url}>VIEW DETAIL</a>
      </div>
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
