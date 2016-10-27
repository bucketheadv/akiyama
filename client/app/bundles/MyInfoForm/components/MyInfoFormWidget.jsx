import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

export default class MyInfoFormWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 7 }
    }
    return (
      <div className="featureItem">
        <Form horizontal action="/users" method="POST" onSubmit={() => {}}>
          <input type="hidden" name="_method" value={this.props.method || 'post'} />
          <input type="hidden" name="authenticity_token" value={this.props.csrf_token} />
          <FormItem
            {...formItemLayout}
            label="邮箱">
            <Input name="user[email]" type="text" defaultValue={this.props.user.email} />
          </FormItem>
          <FormItem wrapperCol={{ span: 16, offset: 3 }} style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">更新</Button>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="不高兴?">
            <a href="/users" data-confirm="您确定?" data-method="delete">删除我的帐户</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}
