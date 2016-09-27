import React, { PropTypes } from 'react';
import AdminHeaderWidget from  '../components/AdminHeaderWidget'

export default class AdminHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <AdminHeaderWidget {...this.props} />
    );
  }
}
