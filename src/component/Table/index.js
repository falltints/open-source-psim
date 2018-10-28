import React, { Component } from 'react';
import { Table, Row, Col, Button } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '5',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '6',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '7',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '8',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '9',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '10',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '11',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '12',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '13',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class EnhancedTable extends Component {
    setTableTitle = () => {
        return (
            <Row>
                <Col
                    span={21}
                >
                    <span>报警信息</span>
                </Col>
                <Col
                    span={2}
                >
                    <Button
                        size="small"
                        type="primary"
                        /*style={{
                            backgroundColor: '#406b93',
                            borderColor: '#406b93'
                        }}*/
                    >
                        RESET
                    </Button>
                </Col>
            </Row>
        )
    };

    setPaginationConfig = () => {
      return {
          showQuickJumper: true
      }
    };

    render() {
        return (
            <div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    size="small"
                    title={this.setTableTitle}
                    pagination={this.setPaginationConfig()}
                />
            </div>
        );
    }
}

export default EnhancedTable;