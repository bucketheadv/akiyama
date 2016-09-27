import React, { PropTypes } from 'react';
import AdminMenuWidget from '../components/AdminMenuWidget';

export default class AdminMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <AdminMenuWidget {...this.props} />;
  }
}
