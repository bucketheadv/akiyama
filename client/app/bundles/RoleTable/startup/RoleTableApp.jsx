import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import RoleTable from '../containers/RoleTable';

const RoleTableApp = (props) => (
  <RoleTable {...props} />
);

ReactOnRails.register({ RoleTableApp });
