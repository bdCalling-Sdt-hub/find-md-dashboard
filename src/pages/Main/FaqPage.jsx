import React from 'react';
import Faq from '../../components/Faq';
import { FaRegQuestionCircle, FaTrash } from 'react-icons/fa';
import { MdOutlineEdit } from "react-icons/md";

const FaqPage = () => {
    return (
        <div className='bg-[#ffffff] p-5'>
            <div className='flex gap-6'>
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
        </div>
    );
};

export default FaqPage;