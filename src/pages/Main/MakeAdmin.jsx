import React, { useState } from 'react';
import {  Table, Dropdown, Menu, Select } from 'antd';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Client from "../../assets/client.png";
const MakeAdmin = () => {
    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        if (e.key === '1') {
            navigate('/client-document-view');
        }
    };

    const items = [
        {
            label: 'View',
            key: '1',
            icon: <MdOutlineRemoveRedEye />,
        },
        {
            label: 'Approve',
            key: '2',
            icon: <FcApproval />,
        },
        {
            label: 'Reject',
            key: '3',
            icon: <MdOutlineCancel />,
            danger: true,
        },
    ];

    const columns = [
        {
            title: 'S.no',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
            render: (value) => (
                <div className='flex gap-2'>
                    <img 
                        className='w-8' 
                        src={Client}
                        alt="User Avatar"
                    />
                    <h1>{value}</h1>
                </div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Check',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <Dropdown overlay={<Menu items={items} onClick={handleMenuClick} />}>
                    <HiOutlineDotsVertical className='cursor-pointer' />
                </Dropdown>
            ),
        },
    ];

    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            user: `Edward King ${i}`,
            email: `edward.king${i}@example.com`,
            status: `success ${i}`,
        });
    }

    const [btn, setBtn] = useState('all');

    return (
        <div>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h1 className='text-[#1DA1F2] text-[32px] font-normal w-full'>Client Documents</h1>
                    <Select
                        placeholder="Status"
                        style={{
                            width: 150,
                            height: 42,
                        }}
                    >
                        <Select.Option value="all">All</Select.Option>
                        <Select.Option value="approved">Approved</Select.Option>
                        <Select.Option value="reject">Reject</Select.Option>
                    </Select>
                </div>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
            </div>
        </div>
    );
};

export default MakeAdmin;
