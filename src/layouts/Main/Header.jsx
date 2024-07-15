import { Link } from 'react-router-dom';
import Client from "../../assets/lamisha.png";

const Header = () => {
    return (
        <div className='bg-[#ffffff] flex items-end justify-end gap-6 py-3 pr-6'>
            <Link to={"/profile"} className='bg-white px-2 rounded-lg py-1'>
                <div className='flex items-center gap-[10px]' >
                    <img  
                        style={{width: 40, height: 40, borderRadius: "100%", border: "2px solid black"}} 
                        src={Client} 
                        alt=""
                    />
                    
                    <div>
                        <p className='text-sm text-[#404040] font-bold '>Lamesha Davis</p>  
                        <p className='text-[12px] font-semibold text-[#565656]'>Admin</p>  
                    </div>
                                    
                </div>
               
            </Link>
        </div>
    )
}

export default Header