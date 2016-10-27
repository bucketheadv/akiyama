import React, { PropTypes } from 'react';

import {Affix, Icon, Menu, Dropdown, Button} from 'antd';

const style = {
    padding: "15px 15px 15px 25px",
    borderBottom: "1px solid #E9E9E9",
    backgroundColor: "#F5F5F5"
};
export default class AdminHeaderWidget extends React.Component {
  userOperators() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a href="/users/edit">编辑</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/users/sign_out" data-method="delete">注销</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <Button type="ghost" style={{marginLeft: 8, marginTop: -25}}>
          {this.props.name}<Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
  render() {
    return (
      <div className="cms_header" style={style}>
        <h2>
          <Icon className="header-icon" type={this.props.icon}></Icon>
          {this.props.title}
        </h2>
        <div className="cms_aver">
          <img src={this.props.aver} alt=""></img>
          {
            this.props.signed_in ? this.userOperators() : <span>{this.props.name}</span>
          }
        </div>
      </div>
    );
  }
}
