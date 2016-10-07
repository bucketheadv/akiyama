import React, { PropTypes } from 'react';
import { Button, Form, Input, Checkbox, Tooltip, Icon, Row, Col} from 'antd';

const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

export default class LoginFormWidget extends React.Component {

  handleSubmit(e) {
    console.log('submit login');
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const formStyle = {
      marginTop: 100,
      background: '#f8f8f8',
      border: '1px solid #d9d9d9',
      paddingTop: 24,
      paddingLeft: 8,
      //paddingBottom: 16,
      paddingRight: 8,
      borderRadius: 6
    };
    return (
      <Row className="" type="flex" justify="space-around" align="middle">
        <Col span="8">
          <Form horizontal action="/users/sign_in" method="POST" onSubmit={this.handleSubmit}
            style={formStyle}>
            <Input name="authenticity_token" type="hidden" value={this.props.csrf_token} />
            <FormItem
              {...formItemLayout}
              label="用户名">
              <Input placeholder="请输入用户名" name="user[email]" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码">
              <Input type='password' name="user[password]" placeholder='请输入密码' />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<span>记住密码<Tooltip title="I come for Qiu Xiang"><Icon type="question-circle-o" /></Tooltip></span>}
              >
              <Checkbox name="user[remember_me]">是</Checkbox>
            </FormItem>
            <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}
