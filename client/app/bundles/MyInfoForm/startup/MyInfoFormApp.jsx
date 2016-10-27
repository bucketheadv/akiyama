import React from 'react';
import ReactOnRails from 'react-on-rails';
import MyInfoForm from '../containers/MyInfoForm';

const MyInfoFormApp = (props) => (
  <MyInfoForm {...props} />
)

ReactOnRails.register({ MyInfoFormApp });
