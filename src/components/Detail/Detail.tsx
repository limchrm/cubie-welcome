import React, { Component } from 'react';
import works, { worksProps } from '../../common/works';
import {
  DetailHeader,
  DetailNav,
  DetailSection,
} from '../Detail';
const styles = require('./Detail.css');

export interface DetailProps {
  workNumber?: number;
}
class Detail extends Component<DetailProps, any> {
  render() {
    return (
      <div>
        <DetailNav workNumber={this.props.workNumber}/>
        <DetailHeader workNumber={this.props.workNumber}/>

        <div className={styles.body}>
          {this.props.children}
        </div>

      </div>
    );
  }
}


export default Detail;
