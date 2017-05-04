import React, { Component, StatelessComponent } from 'react';
import { Link } from 'react-router';
import works, { worksProps } from '../../common/works';
const styles = require('./List.css');

const ListItem: StatelessComponent<worksProps> = props => {
  const {
    title,
    description,
    type,
    tags,
    detailUrl,
    thumbnailUrl,
    BIUrl,
  } = props;

  return (
    <Link to={detailUrl}>
      <article className={styles.item}>
        <div
          className={styles.thumb}
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
        <div className={styles.text}>
          <img
            className={styles.bi}
            src={BIUrl}
            alt={title}
          />
          <h3>{description}</h3>
          <ul className={styles.tags}>
            <li>{type}</li>
            {tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span className={styles.link}>VIEW DETAIL</span>
        </div>
      </article>
    </Link>
  );
}

class List extends Component<any, any> {
  render() {
    return (
      <div className={styles.list}>
        {works.map((work, i) => (
          <ListItem
            key={i}
            title={work.title}
            description={work.description}
            type={work.type}
            tags={work.tags}
            detailUrl={work.detailUrl}
            thumbnailUrl={work.thumbnailUrl}
            BIUrl={work.BIUrl}
          />
        ))}
      </div>
    );
  }
}

export default List;
