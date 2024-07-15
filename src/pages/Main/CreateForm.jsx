
import React, { useState } from 'react';
import Client from "../../assets/lamisha.png";
import { Row, Col} from 'antd';


const CreateForm = () => {
  const [form, setForm] = useState();
  console.log(form)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  return (

    <div style={{ padding: '20px' }}>
      <Row gutter={16} >
        <Col span={24}>
          <div >
            <div className="flex flex-1 items-center border p-5 border-[#1DA1F2]">
              <img className="w-[150px] h-[150px] rounded-full" src={Client} alt="" />
              <div className="text-[32px] text-[#252B42] font-medium ml-5">Lamesha Davis
                <h5 className="text-[#252B42] text-[16px] font-400">lameshadavis@gmail.com</h5>
              </div>
            </div>

          </div>
        </Col>
        <Col span={24} className="mt-5">
          <div >
            <div className=" border-[1px] p-5 border-[#1DA1F2]">
              <div className="text-[24px] text-[#1DA1F2] font-semibold ml-5">Personal Information</div>

              <div className=" flex flex-1 p-5  gap-20 ">

                <div className="text-[#252B42] text-[18px] font-600">
                  <span  style={{fontWeight:"600"}}>First Name</span>
                  <h1 className="text-[#000000] text-[16px] font-400">Lamesha</h1>
                </div>
                <div className="text-[#252B42] text-[18px] font-600 ml-5">
                  <spa style={{fontWeight:"600"}} >Last Name</spa>
                  <h1 className="text-[#000000] text-[16px] font-400">Davis</h1>
                </div>
                <div className="text-[#252B42] text-[18px] font-600">
                  <span style={{fontWeight:"600"}} >Contact No</span>
                  <h1 className="text-[#000000] text-[16px] font-400">+3215444224</h1>
                </div>
              </div>

              <div className=" flex flex-1 p-5  gap-5 ">

                <div className="text-[#252B42] text-[18px] font-600">
                <span style={{fontWeight:"600"}}>Role</span>
                  <h1 className="text-[#000000] text-[16px] font-400 w-[180px]">CEO and Healthcare  Administrator</h1>
                </div>
                <div className="text-[#252B42] text-[18px] font-600">
                <span style={{fontWeight:"600"}}>Email</span>
                  <h1 className="text-[#000000] text-[16px] font-400">lameshadavis@gmail.com</h1>
                </div>
              </div>


            </div>
          </div>

        </Col>
      </Row>
    </div>


  )
}

export default CreateForm