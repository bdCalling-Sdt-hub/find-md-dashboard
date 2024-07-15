import React, { useState } from 'react';
import {Button} from 'antd';
import { PiArrowLeftFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import Protocols from './Protocols';
import StandingOrder from './StandingOrder';
import Policies from './Policies';
import Consents from './Consents';


const ClientPortal = () => {

    const navigate = useNavigate();
    const buttonStyle = {
        transition: 'none',
        backgroundColor: 'transparent',
        color: '#737373',
        fontWeight: 500,
        fontSize: '18px',
        height: '44px'
    };

    const [btn, setBtn] = useState('Protocols');

    const handleClick = (Protocols) => {
        setBtn(Protocols);
    };



    const renderComponent = () => {
        switch (btn) {
            case 'Protocols':
                return (
                    <div>
                        <Protocols />
                    </div>

                )

            case 'Standing':
                return <StandingOrder />
            case 'Policies':
                return <Policies />;
            case 'Consents':
                return <Consents />;
            default:
                return null;
        }
    };
    return (
        <div>
            <div className='flex '>
                <Link to="/client-portal"><span className='text-3xl font-bold'><PiArrowLeftFill /></span></Link>
                <div className='flex flex-1 justify-center gap-5'>
                    <Button
                        onClick={() => handleClick('Protocols')}
                        style={btn === 'Protocols' ? { ...buttonStyle, backgroundColor: '#C738BD', color: 'white' } : buttonStyle}

                    >
                        Protocols
                    </Button>
                    <Button
                        onClick={() => handleClick('Standing')}
                        style={btn === 'Standing' ? { ...buttonStyle, backgroundColor: '#C738BD', color: 'white' } : buttonStyle}
                    >
                        Standing Orders
                    </Button>
                    <Button
                        onClick={() => handleClick('Policies')}
                        style={btn === 'Policies' ? { ...buttonStyle, backgroundColor: '#C738BD', color: 'white' } : buttonStyle}
                    >
                        Policies
                    </Button>
                    <Button
                        onClick={() => handleClick('Consents')}
                        style={btn === 'Consents' ? { ...buttonStyle, backgroundColor: '#C738BD', color: 'white' } : buttonStyle}
                    >
                        Consents
                    </Button>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-sm p-5 h-[70vh] overflow-auto mt-10">
                {renderComponent()}
            </div>

        </div>
    );
};

export default ClientPortal;