import React, { useState } from 'react';
import { Button, Table, Modal } from 'antd';

import { FaEye } from "react-icons/fa";
import { TbPhotoSquareRounded } from "react-icons/tb";
import Clint from "../assets/client.png"

const Team = () => {


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
                        src={Clint}
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
                <FaEye onClick={showModal} className=' cursor-pointer' />
                // <Dropdown overlay={<Menu items={items} onClick={handleMenuClick} />}>
                //     <HiOutlineDotsVertical className='cursor-pointer' />
                // </Dropdown>
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


    //-------------------- Modal --------------- //
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className='text-[#1DA1F2] text-[32px] font-normal w-full'>Client Team</h1>

            </div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />

            {/* Modal sections */}

            <Modal width={'40%'} open={isModalOpen} onCancel={handleCancel} footer={null}>

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#E8F6FE] w-[100%]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className=" w-[100%]">

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name
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
                                    Last Name
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
                                    Date of Brith
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="date"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
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
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone Number
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
                                    Role
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
                            <div className='mt-5 text-[16px] leading-3 font-normal '>  Please provide your license(s)/certificate(s) number(s) </div>
                            <div className='w-[100%] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                                <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>
                                <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                            </div>
                            <div className='mt-5 text-[16px] leading-3 font-normal '>  Upload additional certificates </div>
                            <div className='w-[100%] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                                <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>
                                <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                            </div>
  
                            <center>
                                <Button className='w-[138px] h-[49px] bg-[#80C738] text-2xl text-white font-medium mr-3 mt-3'>Approve</Button>
                                <Button className='w-[138px] h-[49px] bg-[#DF3232] text-2xl text-white font-medium'>Reject</Button>
                            </center>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Team;