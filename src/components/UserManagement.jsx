import React, { useState } from 'react';
import { Button, Form, Input, message, Row, Col, Table, Dropdown, Space, Tooltip, Menu, Modal } from 'antd';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import lamisha from "../assets/client2.png";

const UserManagement = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleMenuClick = (e) => {
        if (e.key === '1') {
            showModal();
        } else {
            message.info(`Clicked on menu item ${e.key}`);
        }
        console.log('Clicked on', e);
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
src={lamisha} alt="" />                    <h1>{value}</h1>
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
                <h1 className='text-[#1DA1F2] text-[32px] font-normal p-1 w-full'>User Management</h1>
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

                <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>

                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#E8F6FE]">
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">


                           

 
                                    <img className='w-[150px] h-[150px] rounded-full m-auto' 
                                    src={lamisha} alt="" />
                                    <div className='flex flex-1 items-center justify-between text-[#252B42] text-[16px] font-normal  leading-6 mt-5'>
                                        <div>
                                            <h1 className='mt-3'>Name</h1>
                                            <h1 className='mt-3'>Eamil</h1>
                                            <h1 className='mt-3'>Contact</h1>
                                            <h1 className='mt-3'>Address</h1>
                                            <h1 className='mt-3'>Eamil</h1>
                                           
                                        </div>
                                        <div className='text-right'>
                                            <h1 className='mt-3'>Alexandra Daddario</h1>
                                            <h1 className='mt-3'>irnabela@gmail.com</h1>
                                            <h1 className='mt-3'>(+33)7 00 55 59 27</h1>
                                            <h1 className='mt-3'>Apt. 738 2086 Marianne Parks</h1>
                                            <h1 className='mt-3'>irnabela@gmail.com</h1>
                                            
                                        </div>
                                    </div>

                            </div>

                        
                    </div>
                </Modal>
            </Row>
        </div>
    );
};

export default UserManagement;
