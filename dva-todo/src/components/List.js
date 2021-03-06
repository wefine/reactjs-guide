import { Popconfirm, Table } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const List = ({ onDelete, lists }) => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'id'
    },
    {
      title: '名称',
      dataIndex: 'name'
    },
    {
      title: '操作',
      displayName: 'displayName',
      render: (text, record) => {
        return (
          <Popconfirm title="是否删除?" onConfirm={() => onDelete(record.id)}>
            <a href="">删除</a>
          </Popconfirm>
        );
      }
    }
  ];
  return (
    <Table
      dataSource={lists}
      columns={columns}
      rowKey={record => record.id}
      pagination={{ pageSize: 6 }}
    />
  );
};

List.defaultProps = {
  displayName: 'todoList'
};

List.propTypes = {
  onDelete: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired
};

export default List;
