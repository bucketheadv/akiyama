import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

export default class PasswordFormWiget extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 7 }
    }
    return (
      <div className="featureItem">
        <Form horizontal action="/admin/users/update_password" method="post" onSubmit={() => {}}>
          <input type="hidden" name="_method" value='PUT' />
          <input type="hidden" name="authenticity_token" value={this.props.csrf_token} />
          <FormItem
            {...formItemLayout}
            label="密码">
            <Input name="user[password]" type="password" defaultValue={this.props.user.password} placeholder="密码最少为6位" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码">
            <Input name="user[password_confirmation]" type="password" defaultValue={this.props.user.password_confirmation} placeholder="必须与密码一致" />
          </FormItem>
          <FormItem wrapperCol={{ span: 16, offset: 3 }} style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">更新</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
