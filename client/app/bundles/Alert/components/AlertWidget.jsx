import React, { PropTypes } from 'react';
import { Alert } from 'antd';

export default class AlertWidget extends React.Component {
  render() {
    return (
      <div style={{padding: 10}}>
        <Alert message={this.props.message} description={this.props.description} type={this.props.type} showIcon />
      </div>
    );
  }
}
