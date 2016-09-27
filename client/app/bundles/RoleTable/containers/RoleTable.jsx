import React, { PropTypes } from 'react';
import RoleTableWidget from '../components/RoleTableWidget';

export default class RoleTable extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <RoleTableWidget {...this.props} />
    );
  }
}
