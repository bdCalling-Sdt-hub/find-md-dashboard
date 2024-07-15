import React from 'react';
import { PiArrowLeftFill } from "react-icons/pi";
import { Button, DatePicker, Form, Table, Input, Radio, Select, Row, Col, message } from 'antd';
import { TbPhotoSquareRounded } from "react-icons/tb";
import lamisha from "../assets/client.png";


const ClientDocumentView = () => {
    return (
        <div>
            <div className='flex '>
                <span className='text-3xl font-bold'><PiArrowLeftFill /></span>
                <img className='w-[150px] h-[150px] rounded-full m-auto' 
src={lamisha} alt="" />            </div>
            <div className=' w-[40%] m-auto flex flex-1 items-center justify-between text-[#252B42] text-[16px] font-normal  leading-6 p-10'>
                <div>
                    <h1 className='mt-3'>Name</h1>
                    <h1 className='mt-3'>Email</h1>
                </div>
                <div className='text-right'>
                    <h1 className='mt-3'>Alexandra Daddario</h1>
                    <h1 className='mt-3'>irnabela@gmail.com</h1>
                </div>
            </div>
            <div className='w-[50%] m-auto'>
                <h1 className='text-[#252B42] text-[24px] leading-6 font-medium'>Upload Documents</h1>
                <Row className='m-auto justify-between' >
                    <Col>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  1.Resume </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>
                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  2.LIABILITY INSURANCE </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  3.EIN FORM (SS-4) Sent by IRS </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  4.CURRENT CPR CERTIFICATION </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>

                    </Col>
                    <Col>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  4.LICENSES + CERTIFICATIONS </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>
                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  2.BUSINESS FORMATION DOCUMENTS </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  3.CURRENT DRIVERS LICENSE</div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  3.BLOOD BORNE PATHOGEN CERTIFICATION</div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                    </Col>
                </Row>
                <h1 className='text-[#252B42] text-[24px] leading-6 font-medium'>Upload Documents</h1>
                <Row className='m-auto justify-between' >
                    <Col>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  1.Resume </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>
                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  2.LIABILITY INSURANCE </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  3.EIN FORM (SS-4) Sent by IRS </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  4.CURRENT CPR CERTIFICATION </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>

                    </Col>
                    <Col>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  4.LICENSES + CERTIFICATIONS </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>
                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  2.BUSINESS FORMATION DOCUMENTS </div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  3.CURRENT DRIVERS LICENSE</div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>
                        <div className='mt-5 text-[16px] leading-3 font-normal '>  3.BLOOD BORNE PATHOGEN CERTIFICATION</div>
                        <div className='w-[337px] h-[44px] bg-white rounded-[10px] p-1 mt-5' htmlFor="">
                            <div className='  items-center  flex text-sm text-[#1DA1F2] font-medium   leading-5 pl-5'> <TbPhotoSquareRounded /> HannahBusing_Resume.pdf</div>

                            <p className='text-[#989692] font-normal leading-5 text-[12px] pl-5'>200 KB</p>
                        </div>


                    </Col>
                </Row>
                <Form>
                    <center className='mt-16'>
                        <button style={{ width: '132px', height: '54px', background: '#80C738', borderRadius: '8px', color: '#ffffff', marginRight: '50px' }}>Approve</button>
                        <button style={{ width: '132px', height: '54px', background: '#DF3232', borderRadius: '8px', color: '#ffffff' }}>Reject</button>
                    </center>
                </Form>
            </div>
        </div>
    );
};

export default ClientDocumentView;