import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';
import { DetailHeader } from '../../components/Detail';

class FindaDetail extends Component<any, any> {
  render() {
    return (
      <div>
        <DetailHeader workNumber={2}/>
      </div>
    );
  }
}

export default FindaDetail;
