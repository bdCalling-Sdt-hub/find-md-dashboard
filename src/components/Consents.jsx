import React from 'react';
import {
    Button, Cascader, DatePicker, Form, Input, Checkbox, Radio, Mentions, Select, TreeSelect, Row, Col, message, Space
} from 'antd';
import { LiaFileUploadSolid } from "react-icons/lia";
const Consents = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h1 className='text-[#252B42] text-lg font-medium'>Consents</h1>
            <p className='text-[16px] text-black font-normal  leading-3 mt-12'>Upload Consents Order Document</p>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item

                    name=""
                    rules={[
                        {
                            name: "policy",
                            required: true,
                            message: 'Please input your policy!',
                        },
                    ]}
                >
                    <label htmlFor="policy" style={{ width: "324px", height: "48px", background: "#E8F6FE", borderRadius: "18px", display: "block", float: "left", marginTop: "20px" }}  >
                        <div className=' flex  items-center text-[14px] font-medium text-[#1D75F2]  leading-4 p-4'><LiaFileUploadSolid /> <p > Click to Upload</p></div>
                        <Input type='file' id="policy" style={{ display: "none" }} />
                    </label>
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit" style={{ width: "150px", height: "44px" }}>
                        Save & Change
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Consents;