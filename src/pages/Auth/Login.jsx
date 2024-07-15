import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import Heading from "../../components/Heading";
import MetaTag from '../../components/MetaTag';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleSubmit=(values)=>{
        console.log("Received Values", values)
        navigate("/")
    }
    return (
        <div className='w-[516px]'>
            <Heading title={"Login to Account"} style="mb-5 text-center font-weight:700; color:#202224" />
            <MetaTag title={"Login"}  />
            <p className='text-[#202224] text-[18px] leading-[21px]  text-center font-semibold'>Please enter your email and password to continue</p>

            <Form onFinish={handleSubmit} className='mt-10' layout='vertical'>
                <Form.Item
                    label={<p className='text-[#] text-[18px] leading-[21px] text-center' >Email address</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Email"
                        }
                    ]}
                    name={"email"}
                >
                    <Input
                        placeholder='Enter Your Email'
                        style={{
                            background: "#F1F4F9",
                            width: "100%",
                            height: 50,
                            border: "1px solid #D8D8D8",
                            outline: "none",
                            color: "#A6A6A6",
                        }}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 24}}
                    label={<p className='text-[#6A6D7C] text-[18px] leading-[21px] raleway-regular text-center'>Password</p>}
                    name={"password"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Password"
                        }
                    ]}
                >
                    <Input.Password 
                        placeholder='Enter Your Password'
                        style={{
                            background: "#F1F4F9",
                            width: "100%",
                            height: 50,
                            border: "1px solid #D8D8D8",
                            outline: "none",
                            color: "#A6A6A6",
                        }}
                    />
                </Form.Item>

                <div className="flex items-center justify-between mb-10">
                    <Form.Item name="remember" noStyle>
                        <Checkbox onChange={(e)=>setChecked(e.target.checked)} className='raleway-regular text-base leading-6' style={{color: "#6A6D7C"}}>Remember me</Checkbox>
                    </Form.Item> 
                    <a
                        className="raleway-regular text-base leading-6"
                        style={{ color: "#6A6D7C" }}
                        href="/auth/forgot-password"
                    >
                        Forgot password
                    </a>
                </div>

                <Form.Item style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button
                         
                        htmlType='submit'
                        style={{
                            background: "#005FBF",
                            width: '320px',
                            height: 50,
                            border: "1px solid #E0E0E0",
                            outline: "none",
                            margin: "0 auto",
                            color: "white",
                            borderRadius: 8
                        }}
                        className=' text-base leading-6'
                    >
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;