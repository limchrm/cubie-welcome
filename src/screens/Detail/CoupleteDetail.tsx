import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';
import { DetailHeader } from '../../components/Detail';

class CoupleteDetail extends Component<any, any> {
  render() {
    return (
      <div>
        <DetailHeader workNumber={1}/>
      </div>
    );
  }
}

export default CoupleteDetail;
