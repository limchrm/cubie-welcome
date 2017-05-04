import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';

interface DetailHeaderProps {
  workNumber: number;
}
const DetailHeader: StatelessComponent<DetailHeaderProps> = props => {
  return (
    <header>
      {works.slice(props.workNumber - 1, props.workNumber).map(work => (
        <div key={work.title}>
          <h1>{work.title}</h1>
          <h2>{work.description}</h2>
          <h3>
            {work.startDate === work.endDate
              ? work.startDate
              : `${work.startDate} ~ ${work.endDate}`
            }
          </h3>
          <h4>{work.type}</h4>
          <p>{work.belongTo}</p>
          <p>{work.workedBy}</p>
          <ul>
            {work.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a href={work.workUrl} target="_blank">{work.workUrl}</a>
        </div>
      ))}
    </header>
  );
}

export default DetailHeader;
