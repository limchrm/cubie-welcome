import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';
import { DetailHeader } from '../../components/Detail';

class LovedaysDetail extends Component<any, any> {
  render() {
    return (
      <div>
        <DetailHeader workNumber={3}/>
      </div>
    );
  }
}

export default LovedaysDetail;
