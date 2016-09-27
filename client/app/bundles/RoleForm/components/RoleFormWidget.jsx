import React, { PropTypes } from 'react';
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export default class RoleFormWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
    var role = this.props.role;
    if(!role) role = {};
    this.state = {
      role: role
    };
  }
  handleSubmit(e) {
    //e.preventDefault();
    console.log('12312312');
  }
  dealAuthorities(authorities, has_authorities) {
    if (!authorities) return;
    var self = this;
    var ret = [];
    for (var i in authorities) {
      var role = authorities[i];
      ret.push(
        <FormItem key={i} wrapperCol={{ span: 16, offset: 3}} style={{marginBottom: 10}}>
          <span style={{width:50}}>{role.name}:&nbsp;&nbsp;</span>
          {self.generateCheckbox(i, role, has_authorities)}
        </FormItem>
      )
    }
    return ret;
  }
  generateCheckbox(type, role, has_authorities) {
    if(role.operations) {
      var checkboxs = [];
      for(var i in role.operations) {
        var oper = role.operations[i];
        var check_name = "role[content][" + type + "][" + i + "]";
        var checked = false;
        if(has_authorities[type] && has_authorities[type][i]) checked = true;
        checkboxs.push(
          <Checkbox name={check_name} key={i} defaultChecked={checked} >{oper}</Checkbox>
        );
      }
      return checkboxs;
    }
  }
  checkHasAuthority(curr, check) {
    var flag = false;
    if (check && check.length > 0) {
      check.each(function(i) {
        if (check[i] == curr) {
          flag == true;
        }
      })
    }
    return flag;
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 14 },
    };
    return (
      <div className="featureItem">
        <Form name="role" action={this.props.action} method='POST' horizontal onSubmit={this.handleSubmit}>
          <Input name="utf8" type="hidden" value="&#x2713;" />
          <Input name="_method" type="hidden" value={this.props.method} />
          <Input name="authenticity_token" type="hidden" value={this.props.csrf_token} />
          <FormItem
            {...formItemLayout}
            label='名称'
            >
            <Input name="role[name]" defaultValue={this.state.role.name} type="text" placeholder="请输入名称" />
          </FormItem>
          {this.dealAuthorities(this.props.authorities, this.props.role.content)}
          <FormItem wrapperCol={{ span: 16, offset: 3}} style={{marginTop: 24}}>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
