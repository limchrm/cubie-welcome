import React, { Component, StatelessComponent } from 'react';
import classNames from 'classnames';
import works, { worksProps } from '../../common/works';
import { DetailProps } from './Detail';
const styles = require('./Detail.css');

const DetailHeader: StatelessComponent<DetailProps> = ({ workNumber }) => {
  const work = works[workNumber - 1];

  return (
    <header className={styles.header}>
      <div
        className={styles.headerBg}
        style={{ backgroundImage: `url(${work.thumbnailUrl})` }}
      />
      <div className={styles.container}>
        <div className={styles.title}>
          <h4 className={styles.type}>{work.type}</h4>
          <h1>{work.title}</h1>
          <h2>{work.description}</h2>
          <ul className={styles.tags}>
            {work.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className={styles.info}>
          <p>
            {work.startDate === work.endDate
              ? work.startDate
              : `${work.startDate} ~ ${work.endDate}`
            }
          </p>

          <p className={classNames({
            [styles.belongTo]: true,
            [styles.company]: work.workedBy === 'company',
            [styles.personal]: work.workedBy === 'personal',
          })}>
            {work.belongTo}
          </p>

          <p>
            <a
              className={styles.linkToWork}
              href={work.workUrl}
              target="_blank"
            >{work.workUrl}</a>
          </p>

        </div>
      </div>
    </header>
  );
}

export default DetailHeader;
