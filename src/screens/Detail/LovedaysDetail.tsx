import React, { StatelessComponent } from 'react';
import { DetailSlider } from '../../components/Detail';

const LovedaysDetail: StatelessComponent<void> = () => (
  <DetailSlider
    title='lovedays'
    maxStep={4}
  />
);

export default LovedaysDetail;
