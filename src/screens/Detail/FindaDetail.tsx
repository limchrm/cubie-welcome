import React, { StatelessComponent } from 'react';
import { DetailSlider } from '../../components/Detail';

const FindaDetail: StatelessComponent<void> = () => (
  <DetailSlider
    title='finda'
    maxStep={6}
  />
);

export default FindaDetail;
