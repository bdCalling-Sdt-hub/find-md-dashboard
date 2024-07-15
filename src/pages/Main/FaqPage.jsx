import React, { useState } from 'react';
import Faq from '../../components/Faq';
import { FaRegQuestionCircle, FaTrash } from 'react-icons/fa';
import { MdOutlineEdit } from "react-icons/md";
import { Button, Form, Input, message, Row, Col, Table, Dropdown, Space, Tooltip, Menu, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const FaqPage = () => {
    //-------------------- Modal --------------- //
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //-------------------- Modal --------------- //
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const editModal = () => {
        setIsModalOpen(true);
    };
    const editHandleCancel = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div className='bg-[#ffffff] p-5'>
            <div className='flex flex-1 justify-between'>
                <div className='text-[18px] font-medium'>FAQ</div>
                <div><Button onClick={showModal} type="primary" className='w-[150px] h-[41px]'>Add FAQ</Button></div>
            </div>

            <div className='flex gap-6 mt-5'>
                <FaRegQuestionCircle size={28} color='#1DA1F2' />
                <div className='w-full'>

                    <div
                        className='p-4 rounded-lg text-[#707070] leading-6 text-[16px] font-medium mb-4 bg-[#F9F9F9]'
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
                    >
                        <p className='text-[#636363] text-base leading-6 poppins-medium text-[16px]'> Does Find a MD 4 Me provide MDs for Estheticians and LVNs?</p>
                    </div>



                    <div
                        className='p-4 rounded-lg text-[#818181] text-[16px] font-normal text-base leading-6 poppins-regular bg-[#F9F9F9] '
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
                    >
                        Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.
                    </div>
                </div>
                <div className='w-10 cursor-pointer h-10 border border-[#E6E5F1] rounded-lg flex items-center justify-center'>
                    <FaTrash size={20} color='#808080'  />

                </div>
                <div onClick={editModal} className='w-10 cursor-pointer h-10 border border-[#E6E5F1] rounded-lg flex items-center justify-center'>
                    <MdOutlineEdit size={20} color='#808080' /></div>

            </div>
            <div className='flex gap-6 mt-7'>
                <FaRegQuestionCircle size={28} color='#1DA1F2' />
                <div className='w-full'>

                    <div

                  
                        className='p-4 rounded-lg text-[#707070] leading-6 text-[16px] font-medium mb-4 bg-[#F9F9F9]'
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
                    >
                        <p className='text-[#636363] text-base leading-6 poppins-medium text-[16px]'> Does Find a MD 4 Me provide MDs for Estheticians and LVNs?</p>
                    </div>



                    <div
                        className='p-4 rounded-lg text-[#818181] text-[16px] font-normal text-base leading-6 poppins-regular bg-[#F9F9F9]  '
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
                    >
                        Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.
                    </div>
                </div>
                <div className='w-10 cursor-pointer h-10 border border-[#E6E5F1] rounded-lg flex items-center justify-center'>
                    <FaTrash size={20} color='#808080' />

                </div>
                <div className='w-10 cursor-pointer h-10 border border-[#E6E5F1] rounded-lg flex items-center justify-center'><MdOutlineEdit size={20} color='#808080' /></div>

            </div>
            <div className='flex gap-6 mt-7'>
                <FaRegQuestionCircle size={28} color='#1DA1F2' />
                <div className='w-full'>

                    <div
                        className='p-4 rounded-lg text-[#707070] leading-6 text-[16px] font-medium mb-4 bg-[#F9F9F9]'
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
                    >
                        <p className='text-[#636363] text-base leading-6 poppins-medium text-[16px]'> Does Find a MD 4 Me provide MDs for Estheticians and LVNs?</p>
                    </div>



                    <div
                        className='p-4 rounded-lg text-[#818181] text-[16px] font-normal text-base leading-6 poppins-regular bg-[#F9F9F9]  '
                        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
                    >
                        Yes, we do. Provided that the client only practices within scope and the medical director believes the business is suitable for our company.
                    </div>
                </div>
                <div className='w-10 cursor-pointer h-10 border border-[#E6E5F1] rounded-lg flex items-center justify-center'>
                    <FaTrash size={20} color='#808080' />

                </div>
                <div className='w-10 cursor-pointer h-10 border border-[#E6E5F1] rounded-lg flex items-center justify-center'><MdOutlineEdit size={20} color='#808080' /></div>

            </div>

            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#E8F6FE]">
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-[16px] font-medium leading-6 text-[#737373]">
                                    Add FAQ Question
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
                                <TextArea style={{ width: '100%', height: '150px', marginTop: "10px" }} placeholder='type your answer'></TextArea>
                            </div>

                            <center><Button className='w-[138px] h-[49px] bg-[#C738BD] text-2xl text-white font-medium'>Submit</Button></center>
                        </form>
                    </div>
                </div>
            </Modal>

            {/* Edite Modal */}
            <Modal open={isEditModalOpen} onCancel={editHandleCancel} footer={null}>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#E8F6FE]">
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-[16px] font-medium leading-6 text-[#737373]">
                                    Edit FAQ Question
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
                                <TextArea style={{ width: '100%', height: '150px', marginTop: "10px" }} placeholder='type your answer'></TextArea>
                            </div>

                            <center><Button className='w-[138px] h-[49px] bg-[#C738BD] text-2xl text-white font-medium'>Submit</Button></center>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default FaqPage;