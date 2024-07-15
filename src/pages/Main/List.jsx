import React, { useState } from 'react';
import { Button, Form, Input, message, Row, Col, Table, Dropdown, Space, Tooltip, Menu } from 'antd';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Client from "../../assets/client.png";

const List = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleMenuClick = (e) => {
        message.info(`Clicked on menu item ${e.key}`);
        console.log('Clicked on', e);
        if (e.key === '1') {
            navigate('/parsonal');
        }
        // Add logic for other menu items if needed
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
                    <img className='w-8' 
                        src={Client} alt="User Avatar" />
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
            title: 'View',
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


    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className='text-[#1DA1F2] text-[32px] font-normal p-1 w-full'>Client Request</h1>
                <Input
                    style={{ width: '320px', borderRadius: '28px', marginTop: '25px', fontSize: '16px', color: '#49454F' }}
                    placeholder="Search Here"
                    suffix={<IoIosSearch />}
                />
            </div>
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 9 }} />
                </Col>
            </Row>
        </div>
    );
};

export default List;
