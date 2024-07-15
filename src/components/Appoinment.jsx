import React from 'react';
import { Form, message } from 'antd';
import Client from "../assets/client.png"

const Appoinment = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    return (
        <div>

            <div className='w-[50%] pl-20 p-20 rounded-md bg-[#E8F6FE] mt-5 m-auto '>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <img className='w-[150px] h-[150px] rounded-full m-auto' src={Client} alt="" />
                    <div className='flex flex-1 items-center justify-between text-[#252B42] text-[16px] font-normal  leading-6 p-10'>
                        <div>
                            <h1 className='mt-3'>Name</h1>
                            <h1 className='mt-3'>Email</h1>
                            <h1 className='mt-3'>Contact</h1>
                            <h1 className='mt-3'>Address</h1>
                            <h1 className='mt-3'>Appointment Date</h1>
                            <h1 className='mt-3'>Appointment Time</h1>
                        </div>
                        <div className='text-right'>
                            <h1 className='mt-3'>Alexandra Daddario</h1>
                            <h1 className='mt-3'>irnabela@gmail.com</h1>
                            <h1 className='mt-3'>(+33)7 00 55 59 27</h1>
                            <h1 className='mt-3'>Apt. 738 2086 Marianne Parks</h1>
                            <h1 className='mt-3'>01-06-2024</h1>
                            <h1 className='mt-3'>10:30 AM</h1>
                        </div>
                    </div>





                    <center>
                        <button style={{ width: '132px', height: '54px', background: '#80C738', borderRadius: '8px', color: '#ffffff', marginRight: '50px' }}>Approve</button>
                        <button style={{ width: '132px', height: '54px', background: '#DF3232', borderRadius: '8px', color: '#ffffff' }}>Reject</button>
                    </center>
                </Form>
            </div>
        </div>
    );
};

export default Appoinment;
