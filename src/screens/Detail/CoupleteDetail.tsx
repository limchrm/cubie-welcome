import React, { Component, StatelessComponent } from 'react';
import works, { worksProps } from '../../common/works';
import Detail from '../../components/Detail';

class CoupleteDetail extends Component<any, any> {
  render() {
    return (
      <Detail workNumber={1}>
      </Detail>
    );
  }
}

export default CoupleteDetail;
