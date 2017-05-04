import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';
import { DetailHeader } from '../../components/Detail';

class DdaomDetail extends Component<any, any> {
  render() {
    return (
      <div>
        <DetailHeader workNumber={4}/>
      </div>
    );
  }
}

export default DdaomDetail;
