import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';
import { DetailHeader, DetailNav } from '../Detail';

export interface DetailProps {
  workNumber?: number;
}
const Detail: StatelessComponent<DetailProps> = ({ workNumber }) => {
  return (
    <div>
      <DetailNav workNumber={workNumber}/>
      <DetailHeader workNumber={workNumber}/>
    </div>
  );
}

export default Detail;
