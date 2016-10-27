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
    window.location = `?tab=${e}`
  }

  render() {
    //return <MyInfoFormWidget {...this.props} />;
    return (
      <Tabs defaultActiveKey={this.props.tab} onTabClick={this.handleTab}>
        <TabPane tab={<span><Icon type="apple"/>个人信息</span>} key="1" >
          <MyInfoFormWidget {...this.props} />
        </TabPane>
        <TabPane tab={<span><Icon type="android"/>密码</span>} key="2" >
          <PasswordFormWidget {...this.props} />
        </TabPane>
      </Tabs>
    )
  }
}
