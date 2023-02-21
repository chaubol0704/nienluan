import React, { useCallback } from 'react';
import logo from '../../assets/logo.png';
import { path } from '../../ultils/constant'
import { Button } from '../../components';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
    
    const navigate = useNavigate();
    const goLogin = useCallback((flag)=> {
        navigate(path.LOGIN , {state:{flag} })
    },[])

    return (
        <div className='w-full flex items-center justify-between bg-black '>
            <Link to={'/'} >
                <img
                            src={logo}
                            alt="logo"
                            className='w-[240px] h-[70px] object-contain'
                />  
            </Link>
            <div className='flex items-center gap-2'>
                <Button
                    text={'Đăng nhập'}
                    textColor='text-white'
                    bgColor='bg-[#3961fb]'
                    onClick={() => goLogin(false)}   
                 />
                 <Button
                    text={'Đăng ky'}
                    textColor='text-white'
                    bgColor='bg-[#3961fb]'
                    onClick={()=>goLogin(true)}   
                 />
                
            </div>
        
        </div>
    );
}

export default Header;
