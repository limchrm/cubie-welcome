import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';

const DetailHeader: StatelessComponent<worksProps> = props => {
  const {
    title,
    description,
    startDate,
    endDate,
    belongTo,
    type,
    tags,
    workUrl,
  } = props;

  return (
    <header>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{startDate} ~ {endDate}</h3>
      <h4>{type}</h4>
      <p>{belongTo}</p>
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a href={workUrl} target="_blank">{workUrl}</a>
    </header>
  );
}

export default DetailHeader;
