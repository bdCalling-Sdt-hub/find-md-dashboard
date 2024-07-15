import React, { useState } from 'react';
import { Button, Form, message, Row, Col, Table, Modal } from 'antd';
import { RiDeleteBinLine } from "react-icons/ri";

const handleMenuClick = (e) => {
    message.info(`Clicked on menu item ${e.key}`);
    console.log('Clicked on', e);
};

const columns = [
    {
        title: 'S.no',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'State Name',
        dataIndex: 'stateName',
        key: 'stateName',

    },

    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <RiDeleteBinLine className='cursor-pointer text-[16px]' />
        ),
    },
];

const data = [];
for (let i = 0; i < 8; i++) {
    data.push({
        key: i,
        stateName: `Edward King ${i}`,

    });
}


const StatutesCovared = () => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

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

    //-------------------- Modal --------------- //
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ padding: '20px' }}>

            <Row>
                <Col span={24}>
                    <div className="flex justify-between items-center p-5 bg-[#ffffff]">
                        <h1 className='text-[#333333] text-[18px] font-medium p-1 w-full'>States Covered</h1>
                        <Button onClick={showModal} style={{ color: '#fcfcfc' }} className='font-normal text-sm ' type="primary" >
                            + Add Service
                        </Button>
                    </div>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </Col>
            </Row>

            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#E8F6FE]">
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">

                            {/* <div>
                                <div className="mt-2">
                                    <input style={{display:'none'}}
                                        id="file"
                                        name="name"
                                        type="file"
                                        autoComplete="file"
                                        required
                                        className="block w-[150px] h-[150px] rounded-full border-0 bg-[#D9D9D9] py-1.5 m-auto text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "

                                    />
                                    <label htmlFor="file">photo</label>
                                </div>
                            </div> */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>

                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm password
                                    </label>
                                </div>

                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-12"
                                    />
                                </div>
                            </div>
                            <center><Button className='w-[138px] h-[49px] bg-[#1D75F2] text-2xl text-white font-medium'>Submit</Button></center>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default StatutesCovared;