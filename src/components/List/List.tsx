import React, { Component, StatelessComponent } from 'react';
import classNames from 'classnames';
const styles = require('./List.css');

interface ListItemProps {
  thumbnailUrl?: string;
  title: string;
  description: string;
  url: string;
  className?: string;
}
const ListItem: StatelessComponent<ListItemProps> = props => (
  <article className={styles.item}>
    <div
      className={styles.thumb}
      style={{ backgroundImage: `url(${props.thumbnailUrl})` }}
    >
      <div className={styles.text}>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <a href={props.url}>VIEW DETAIL</a>
      </div>
    </div>
  </article>
);

class List extends Component<any, any> {
  render() {
    return (
      <div className={styles.list}>
        <ListItem
          className={styles.left}
          url='#'
          title='츄츄츄츄'
          description='어른인 내가 참아야지'
          thumbnailUrl='https://i.ytimg.com/vi/xkxjNZComZg/maxresdefault.jpg'
        />
        <ListItem
          className={styles.right}
          url='#'
          title='츄츄츄츄'
          description='어른인 내가 참아야지'
          thumbnailUrl='https://i.ytimg.com/vi/xkxjNZComZg/maxresdefault.jpg'
        />
      </div>
    );
  }
}

export default List;