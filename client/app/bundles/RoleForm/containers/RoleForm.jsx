import React, { PropTypes } from 'react';
import RoleFormWidget from '../components/RoleFormWidget';

export default class RoleForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <RoleFormWidget {...this.props}></RoleFormWidget>
    );
  }
}
