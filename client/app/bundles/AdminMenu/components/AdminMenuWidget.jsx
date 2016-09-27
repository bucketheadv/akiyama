import React, { PropTypes } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
var url = require('url');

export default class AdminMenuWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open_keys: []
    };
  }
  handleClick(e) {
    //console.log('click ', e);
  }
  dealMenuList(list) {
    var self = this;
    if (!list) {
      return ;
    }
    var i = 0;
    return list.map(function(item) {
      if (item.items && item.items.length > 0) {
        let icon = item.icon ? <Icon type={item.icon} /> : '';
        return(<SubMenu key={item.key} title={<span>{icon}<span>{item.title}</span></span>}>
          {self.dealMenuList(item.items)}
        </SubMenu>);
      } else {
        if(!item.can) return [];
        return (
          <Menu.Item key={item.key}>
            <a href={item.key}>{item.title}</a>
          </Menu.Item>
        );
      }
    });
  }
  dealMenuSelectedList(list, keys) {
    var self = this;
    if (!list) return ;
    var res;
    for(var i in list) {
      var item = list[i];
      if (item.items && item.items.length) {
        keys.push(item.key);
        var result = self.dealMenuSelectedList(item.items, keys)
        if(result[0]) {
          return [true, result[1]];
        } else {
          keys = keys.filter((k) => k != item.key );
          //return [false, []];
        }
      } else {
        if (url.parse(this.props.selected_keys).pathname === item.key) {
          return [true, keys];
        }
      }
    }
    return [false, []];
  }
  componentWillMount() {
    var result = this.dealMenuSelectedList(this.props.menuList, []);
    this.setState({
      open_keys: result[1]
    });
  }
  render() {
    return (<Menu onClick={this.handleClick}
      style={{ width: 240 }}
      defaultOpenKeys={this.state.open_keys}
      selectedKeys={[this.props.selected_keys]}
      mode="inline"
      >
      {this.dealMenuList(this.props.menuList)}
    </Menu>);
  }
}
