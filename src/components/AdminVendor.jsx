import { useState } from 'react';
import { Button, Row, Col, Table, Modal } from 'antd';
import { RiDeleteBinLine } from "react-icons/ri";
import Client from "../assets/client.png";

const columns = [
    {
        title: 'S.no',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Vendors Name',
        dataIndex: 'user',
        key: 'user',
        render: (value) => (
            <div className='flex gap-2'>
                <img className='w-8' 
                    src={Client}
                    alt="User Avatar" 
                />
                <h1>{value}</h1>
            </div>
        ),
    },

    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <RiDeleteBinLine className='cursor-pointer text-[16px]' />
        ),
    },
];

const data = [];
for (let i = 0; i < 8; i++) {
    data.push({
        key: i,
        user: `Edward King ${i}`,
        email: `edward.king${i}@example.com`,
    });
}

const AdminVendor = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className="flex  items-center mb-6 justify-end">                
                <Button onClick={showModal} style={{ color: '#ffffff', padding:'5px', width:'147px', height:'40px' }} className='font-normal text-sm text-[#ffffff]' type="primary" >
                    + Add Vendors
                </Button>
            </div>
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} pagination={false} />
                </Col>
            </Row>

            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#E8F6FE]">
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">                            
                            <div>
                                <label htmlFor="email" className="block text-[16px] font-medium leading-6 text-[#737373]">
                                   Vendors Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            
                            <center><Button className='w-[138px] h-[49px] bg-[#C738BD] text-2xl text-white font-medium'>Submit</Button></center>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminVendor;