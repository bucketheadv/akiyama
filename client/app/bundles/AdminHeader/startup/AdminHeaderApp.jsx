import React, { PropTypes } from 'react';
import ReactOnRails from 'react-on-rails';
import AdminHeader from '../containers/AdminHeader';

const AdminHeaderApp = (props) => (
  <AdminHeader {...props} />
);

ReactOnRails.register({ AdminHeaderApp });
