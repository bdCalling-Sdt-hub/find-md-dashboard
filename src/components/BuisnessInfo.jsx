import React from 'react';
import { Button, DatePicker, Form, Input, Radio, Select, Row, Col, message, Space } from 'antd';

const { TextArea } = Input;

const BusinessInfo = () => {
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    return (
        <div>
            <div className='text-[32px] font-medium text-black mt-10' style={{ marginLeft: '300px' }}>Business Information</div>
            <div className='w-full pl-20 pr-20 rounded-md bg-[#E8F6FE] mt-2 pb-10'>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row className='mb-5'>
                        <Col span={12} className='pr-10'>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="businessName"
                                label="Business Name"
                                rules={[{ required: true }, { type: 'string', min: 6 }]}
                            >
                                <Input placeholder="Business Name" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                            </Form.Item>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="businessDuration"
                                label="How long have you been in business?"
                                rules={[{ required: true }]}
                            >
                                <Radio.Group>
                                    <Space direction="vertical">
                                        <Radio value="Start Up">Start Up</Radio>
                                        <Radio value="Less than 1 year">Less than 1 year</Radio>
                                        <Radio value="Less than 2 years">Less than 2 years</Radio>
                                        <Radio value="Greater than 3 years">Greater than 3 years</Radio>
                                        <Radio value="Greater than 5 years">Greater than 5 years</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="registeredWithSoS"
                                label="Is your business registered with the Secretary of State?"
                                rules={[{ required: true }]}
                            >
                                <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="companyOwnership"
                                label="Who owns the company?"
                                rules={[{ required: true }]}
                            >
                                <Radio.Group>
                                    <Space direction="vertical">
                                        <Radio value="Myself">Myself</Radio>
                                        <Radio value="Myself and other Partner(s)">Myself and other Partner(s)</Radio>
                                        <Radio value="Entity">Entity</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="entityType"
                                label="What type of entity?"
                                rules={[{ required: true }]}
                            >
                                <Radio.Group>
                                    <Space direction="vertical">
                                        <Radio value="LLC">LLC</Radio>
                                        <Radio value="PLLC">PLLC</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="serviceProviders"
                                label="Who will be providing direct services at your business?"
                                rules={[{ required: true }]}
                            >
                                <Radio.Group>
                                    <Space direction="vertical">
                                        <Radio value="Myself">Myself</Radio>
                                        <Radio value="Employees">Employees</Radio>
                                        <Radio value="Contractors">Contractors</Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="serviceTier"
                                label="What tier of services are you interested in?"
                                rules={[{ required: true }, { type: 'string', min: 6 }]}
                            >
                                <Radio.Group>
                                    <Radio value="Tier 1">Tier 1</Radio>
                                    <Radio value="Tier 2">Tier 2</Radio>
                                    <Radio value="Tier 3">Tier 3</Radio>
                                    <Radio value="Tier 4">Tier 4</Radio>
                                    <Radio value="custom">Custom</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="businessAddress"
                                label="Business Address"
                                rules={[{ required: true }, { type: 'string', min: 2 }]}
                            >
                                <Input placeholder="Business address" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                            </Form.Item>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="malpracticeInsurance"
                                label="Does your business have malpractice insurance?"
                                rules={[{ required: true }]}
                            >
                                <Radio.Group>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="registeredStates"
                                label="What state(s) is your business registered in?"
                                
                                rules={[{ required: true }]}
                            >
                                <Select style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px', }} placeholder="New York" >
                               
                                    <Select.Option value="NY">New York</Select.Option>
                                    <Select.Option value="CA">California</Select.Option>
                                    <Select.Option value="FL">Florida</Select.Option>
                                    {/* Add other states as needed */}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="serviceStates"
                                label="What state(s) do you anticipate providing services in?"
                                rules={[{ required: true }]}
                            >
                                <Select style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} placeholder="New York, Los Angles, Florida" >
                                    <Select.Option value="NY">New York</Select.Option>
                                    <Select.Option value="CA">California</Select.Option>
                                    <Select.Option value="FL">Florida</Select.Option>
                                    {/* Add other states as needed */}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="serviceClientsPerMonth"
                                label="How many clients/patients do you have or expect to service a month?"
                                rules={[{ required: true }, { type: 'number' }]}
                            >
                                <Input placeholder="120" style={{ width: '100%', height: 48, background: '#FFFFFF', borderRadius: '10px' }} />
                            </Form.Item>
                            <Form.Item
                                className='text-[16px] font-medium text-[#737373] m-2'
                                name="additionalQuestions"
                                label="Additional questions you have for the scheduled call please write below"
                                rules={[{ required: true }, { type: 'string', min: 2 }]}
                            >
                                <TextArea rows={100}  style={{ width: '100%', height:'150px' }} placeholder="Please write your questions here" allowClear />
                            </Form.Item>

                        </Col>
                    </Row>
                    <center>
                        <Button  htmlType="submit" style={{ width: '132px', height: '54px', marginRight: '50px', color:'#ffffff', fontSize:'24px', fontWeight:500, background:"#80C738" }}>Approve</Button>
                        <Button type="danger" style={{ width: '132px', height: '54px', color:'#ffffff', fontSize:'24px', fontWeight:500, background:"#DF3232" }}>Reject</Button>
                    </center>
                </Form>
            </div>
        </div>
    );
};

export default BusinessInfo;
