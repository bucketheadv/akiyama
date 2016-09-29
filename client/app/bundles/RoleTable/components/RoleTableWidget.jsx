import React, { PropTypes } from 'react';

import { Table } from 'antd';

export default class RoleTableWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  pagination() {
    const pagination = {
      total: this.props.total,
      defaultPageSize: this.props.page_size,
      current: this.props.current,
      showSizeChanger: false,
      onShowSizeChange(current, pageSize) {
        console.log("Current: ", current, ", pageSize: ", pageSize);
      },
      onChange(current) {
        console.log("Change, current: ", current);
        window.location = "?page=" + current;
      }
    };
    return pagination;
  }
  render() {
    var columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    },{
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <span>
          <a href={"/admin/roles/" + record.id + "/edit"}>编辑</a>
          <span className="ant-divider"></span>
          <a href={"/admin/roles/" + record.id} data-method="delete" data-confirm="你确定?">删除</a>
        </span>
      )
    }];
    return (
      <Table dataSource={this.props.dataSource} columns={columns} pagination={this.pagination()} />
    );
  }
}
