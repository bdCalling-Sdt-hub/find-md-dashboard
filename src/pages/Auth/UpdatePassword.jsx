import Heading from '../../components/Heading';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MetaTag from '../../components/MetaTag';

const UpdatePassword = () => {
    const navigate = useNavigate();

    const handleSubmit=(values)=>{
        console.log("Received Values", values);
        Swal.fire({
            title: "Congratulations",
            html: "Your password has been successfully reset. click confirm to set a new password",
            confirmButtonText: 'Continue',
            customClass: {
              confirmButton: 'custom-send-button',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/auth")
            }
        });
    }

    return (
        <div className='w-[516px]'>
            <Heading title={"Set New Password"} style="mb-6 text-center" />
            <MetaTag title={"Update Password"} />
            <p className='raleway-regular text-base leading-6 text-center' style={{width: "320px", color: "#929394",  margin: "0 auto 30px auto"}}>
                Create a new password. Ensure it differs from previous ones for security
            </p>

            <Form onFinish={handleSubmit} layout='vertical'>
                <Form.Item
                    style={{marginBottom: 24}}
                    label={<p className='text-[#6A6D7C] text-[18px] leading-[21px] raleway-regular text-center'>New Password</p>}
                    name={"new_password"}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter New Password"
                        }
                    ]}
                >
                    <Input.Password 
                        placeholder='Enter Your New Password'
                        style={{
                            background: "#F1F4F9",
                            width: "100%",
                            height: 50,
                            border: "1px solid #D8D8D8",
                            outline: "none"
                        }}
                    />
                </Form.Item>

                
                <Form.Item
                    style={{marginBottom: 24}}
                    name={"confirm_password"}
                    label={<p className='text-[#6A6D7C] text-[18px] leading-[21px] raleway-regular text-center'>Confirm Password</p>}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Confirm Password"
                        }
                    ]}
                >
                    <Input.Password 
                        placeholder='Enter Your Confirm Password'
                        style={{
                            background: "transparent",
                            width: "100%",
                            height: 50,
                            border: "1px solid #E0E0E0",
                            outline: "none"
                        }}
                    />
                </Form.Item>

                <Form.Item style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button
                        htmlType='submit'
                        style={{
                            background: "#005FBF",
                            width: 320,
                            height: 50,
                            border: "1px solid #E0E0E0",
                            outline: "none",
                            margin: "0 auto",
                            color: "white",
                            borderRadius: 8
                        }}
                        className='raleway-regular text-base leading-6'
                    >
                        Update password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdatePassword