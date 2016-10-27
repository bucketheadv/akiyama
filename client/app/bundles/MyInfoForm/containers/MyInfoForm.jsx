import React from 'react';
import MyInfoFormWidget from '../components/MyInfoFormWidget';

export default class MyInfoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <MyInfoFormWidget {...this.props} />;
  }
}
