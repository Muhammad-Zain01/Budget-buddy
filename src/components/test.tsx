import React from 'react';
import { Table } from '@/ui/imports/ui-import';
import type { ColumnsType, TableProps } from 'antd/es/table';
import styled from 'styled-components';

const TableMain = styled(Table)`
    background: ${props => props.theme.background} !important;
    table, td, tr{
        background: ${props => props.theme.cardBackground} !important;
        color: ${props => props.theme.color} !important;
        border: none !important;
    }
    th{
        color: ${props => props.theme.color} !important;
        background: ${props => props.theme.contentBackground} !important;
        border-bottom: none !important;
    }
    tbody{
        box-shadow: ${props => props.theme.cardShadow} !important;
    }
    th::before{
        display: none !important;
    }
    .ant-table-column-sorter .anticon{
        color: ${props => props.theme.color} !important;
    }
`


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value: string, record) => record.address.indexOf(value) === 0,
    },
];

const data = [
    {
        key: '1',
        name: 'aaaa',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'bbbb',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'cccc',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },

];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => <TableMain pagination={false} columns={columns} dataSource={data} onChange={onChange} />;

export default App;
