import React, { useState } from 'react';
import {
    Button, Cascader, DatePicker, Form, Input, Radio, Mentions, Select, TreeSelect, Row, Col, message, Space
} from 'antd';
import { PiArrowLeftFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import AppointmentInfo from '../components/Appoinment';
import BuisnessInfo from '../components/BuisnessInfo';


const PersonalInfo = () => {
    const navigate = useNavigate();
    const buttonStyle = {
        transition: 'none',
        backgroundColor: 'transparent',
        color: '#737373',
        fontWeight: 500,
        fontSize: '18px',
        height: '44px'
    };

    const [btn, setBtn] = useState('personal');

    const handleClick = (personal) => {
        setBtn(personal);
    };

    // Form ================ //

    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    const onFill = () => {
        form.setFieldsValue({
            FirstName: 'https://taobao.com/',
        });
    };

    const renderComponent = () => {
        switch (btn) {
            case 'personal':
                return (
                    <>
                        <div className='text-[32px] font-medium text-black mt-10' style={{ marginLeft: '300px' }}>Personal Information</div>
                        <div className='w-full pl-20 pr-20 rounded-md bg-[#E8F6FE] mt-2 pb-10 '>

                            <Form 
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Row className='mb-5'>
                                    <Col span={12} className=' pr-10'>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2  '
                                            name="FirstName"
                                            label="First name"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="Walter" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="dob"
                                            label="Date of Birth"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            {/* <Input placeholder="White" style={{ width: '100%', height:48, background:'#FFFFFF', borderRadius:'10px' }} /> */}
                                            <DatePicker picker="date" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="Phone"
                                            label="Phone"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="+14842634382" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="Phone"
                                            label="Phone"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="+14842634382" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="state"
                                            label="What state(s) are you licensed/certified in?"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Select style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }}  >
                                                <Select.Option value="sample">New York, Los Angles, Florida</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="address"
                                            label="Home Mailing Address"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="+Apt. 738 2086 Marianne Parks, Stammhaven" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>

                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="traningChartificate"
                                            label="Have you completed training/certification for the service(s) you would like to offer?"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                        <Radio>Yes</Radio> <Radio>No</Radio>
                                        </Form.Item>

                                    </Col>
                                    <Col span={12}>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="lastName"
                                            label="Last name"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="White" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="eamil"
                                            label="Email"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="Emailmehedihasan594@gmail.com" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="occepation"
                                            label="Occupation"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="Nurse" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>
                                        <Form.Item className='text-[16px] font-medium text-[#737373] m-2'
                                            name="license"
                                            label="Please provide your license(s)/certificate(s) number(s)"
                                            rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                                        >
                                            <Input placeholder="652479254" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                                        </Form.Item>                                        
                                    </Col>
                                </Row>
                                <center><button style={{width:'132px', height:'54px', background:'#80C738', borderRadius:'8px', color:'#ffffff', marginRight:'50px'}}>Approve</button > <button style={{width:'132px', height:'54px', background:'#DF3232', borderRadius:'8px', color:'#ffffff'}}>Reject</button></center>
                            </Form>

                        </div>
                    </>
                );
            case 'business':
                return <BuisnessInfo />;
            case 'appointment':
                return <AppointmentInfo />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className='flex'>
                <span className='text-3xl font-bold'><PiArrowLeftFill /></span>
                <div className='flex flex-1 justify-center gap-5'>
                    <Button
                        onClick={() => handleClick('personal')}
                        style={btn === 'personal' ? { ...buttonStyle, backgroundColor: '#1DA1F2', color: 'white' } : buttonStyle}
                    >
                        Personal Information
                    </Button>
                    <Button
                        onClick={() => handleClick('business')}
                        style={btn === 'business' ? { ...buttonStyle, backgroundColor: '#1DA1F2', color: 'white' } : buttonStyle}
                    >
                        Business Information
                    </Button>
                    <Button
                        onClick={() => handleClick('appointment')}
                        style={btn === 'appointment' ? { ...buttonStyle, backgroundColor: '#1DA1F2', color: 'white' } : buttonStyle}
                    >
                        Appointment Information
                    </Button>
                </div>
            </div>
            {renderComponent()}
        </div>
    );
};

export default PersonalInfo;
