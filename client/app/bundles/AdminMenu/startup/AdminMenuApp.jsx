import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import AdminMenu from '../containers/AdminMenu';

const AdminMenuApp = (props) => (
  <AdminMenu {...props} />
);

ReactOnRails.register({ AdminMenuApp });
