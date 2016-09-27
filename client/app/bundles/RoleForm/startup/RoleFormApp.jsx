import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import RoleForm from '../containers/RoleForm';

const RoleFormApp = (props) => (
  <RoleForm {...props}></RoleForm>
);

ReactOnRails.register({ RoleFormApp });
