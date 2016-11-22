import React from 'react';
import { Tabs, Icon } from 'antd';

import MyInfoFormWidget from '../components/MyInfoFormWidget';
import PasswordFormWidget from '../components/PasswordFormWidget';

const TabPane = Tabs.TabPane;

export default class MyInfoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  handleTab(e) {
    window.location = `#${e}`
  }

  render() {
    //return <MyInfoFormWidget {...this.props} />;
    let point = window.location.hash.slice(1)
    console.log(point);
    if(point == undefined || point.trim() == '') {
      point = 'userInfo'
    }
    return (
      <Tabs defaultActiveKey={point} onTabClick={this.handleTab}>
        <TabPane tab={<span><Icon type="apple"/>个人信息</span>} key="userInfo" >
          <MyInfoFormWidget {...this.props} />
        </TabPane>
        <TabPane tab={<span><Icon type="android"/>密码</span>} key="pswdInfo" >
          <PasswordFormWidget {...this.props} />
        </TabPane>
      </Tabs>
    )
  }
}
