/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Row, Col, } from 'antd';
import lamisha from "../../assets/lamisha.png";


const CreateForm = () => {
  const [form, setForm] = useState();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  return (

    <div style={{ padding: '20px' }}>
      <Row gutter={16} >
        <Col span={24}>
          <div >
            <div className="flex flex-1 items-center border p-5 border-[#1DA1F2]">
              <img 
                className="w-[150px] h-[150px] rounded-full" 
                src={lamisha} alt="" />
              <div className="text-[32px] text-[#252B42] font-medium ml-5">Lamesha Davis
                <h5 className="text-[#252B42] text-[16px] font-400">lameshadavis@gmail.com</h5>
              </div>
            </div>



            {/* <MetaTag title="Create Form" />
                        <Heading className="text-[#252B42] font-medium text-2xl" title="Upload Documents" />
                        <Form className=" p-10" layout="vertical">
                            <Form.Item
                              label={"1. Resume"}
                            >
                              <input onChange={handleChange} id="resume" type="file" name="resume" style={{display: "none"}} />
                              <label htmlFor="resume" className=" border flex items-center gap-6">
                                <RiFileUploadLine className="text-[#1DA1F2]" />
                                <span >Click to Upload</span>  
                              </label>
                            </Form.Item>

                        </Form> */}

          </div>
        </Col>
        <Col span={24} className="mt-5">
          <div >
            <div className=" border-[1px] p-5 border-[#1DA1F2]">
              <div className="text-[24px] text-[#1DA1F2] font-semibold ml-5">Personal Information</div>

              <div className=" flex flex-1 p-5  gap-20 ">

                <div className="text-[#252B42] text-[18px] font-600">
                  First Name
                  <h1 className="text-[#000000] text-[16px] font-400">Lamesha</h1>
                </div>
                <div className="text-[#252B42] text-[18px] font-600">
                  Last Name
                  <h1 className="text-[#000000] text-[16px] font-400">Davis</h1>
                </div>
                <div className="text-[#252B42] text-[18px] font-600">
                  Contact No
                  <h1 className="text-[#000000] text-[16px] font-400">+3215444224</h1>
                </div>
              </div>

              <div className=" flex flex-1 p-5  gap-5 ">

                <div className="text-[#252B42] text-[18px] font-600">
                Role
                  <h1 className="text-[#000000] text-[16px] font-400">CEO and Healthcare Administrator</h1>
                </div>
                <div className="text-[#252B42] text-[18px] font-600">
                Email
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