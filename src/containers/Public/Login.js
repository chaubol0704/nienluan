import React, {useState, useEffect} from 'react';
import { InputForm, Button } from '../../components';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const location = useLocation()
    const [isRegister, setIsRegister] = useState(location.state?.flag)

    useEffect(()=> {
        setIsRegister(location.state?.flag)
    },[location.state?.flag])
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-8'>
                <h3 className='font-semibold text-2xl mb-3'>{isRegister? 'Dang ky tai khoan': 'Đăng nhập'}</h3>

                <div className='w-full flex flex-col gap-3 mb-7'>
                    {isRegister && <InputForm label={'Ho ten'}/>}
                     <InputForm label={'Phone number'}/>
                     <InputForm label={'Password'}/>
                 </div>

                 <Button
                     text={isRegister ? 'Đăng ky' : 'Đăng nhập'}
                        bgColor='bg-secondary1'
                        textColor='text-white'
                        fullWidth
                    
                 />

                <div className='mt-7  flex items-center justify-between'>
                    {isRegister ? 
                            <small>Ban da co tai khoan? <span className='text-[blue] hover:text-[red] cursor-pointer'
                             onClick={() => {setIsRegister(false)}}>Dang nhap ngay</span></small>
                            :
                        <>
                             <small className='text-[blue] hover:text-[red] cursor-pointer'> Ban quen mat khau</small>
                            <small onClick={()=> {setIsRegister(true)}} 
                             className='text-[blue] hover:text-[red] cursor-pointer'> Tao tai khoan moi</small>
                        </>                
                    }
                   
                 </div>
            </div>
            
           
        </div>
    );
}

export default Login;
