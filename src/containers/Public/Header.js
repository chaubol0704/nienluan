import React, { useCallback, useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png';
import { path } from '../../ultils/constant'
import { Button } from '../../components';
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import Navigation from './Navigation';

const Header = () => {
    const { isLoggedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const [searchParams] = useSearchParams()
    const headerRef = useRef()
    const goLogin = useCallback((flag)=> {
        navigate(path.LOGIN , {state:{flag} })  
    },[])
    // tro ve dau trang khi bam vao so phan trang
    useEffect(() => {
        headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [searchParams.get('page')])
    return (
        <div ref={headerRef}  className='w-full flex items-center justify-center bg-black gap-7 '>
            <Link to={'/'} >
                <img
                            src={logo}
                            alt="logo"
                            className='w-[300px] h-[120px] object-contain ml-16 '
                />  
            </Link>
           <Navigation />
           <div className="relative hidden md:block justify-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="text"  className="cursor-pointer block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
           
            <div className='flex flex-wrap items-center justify-end mx-auto '>
                

                {!isLoggedIn && <div className='flex items-center gap-1 '>
                        <Button
                            text={'Đăng nhập'}
                            textColor='text-white'
                            bgColor='bg-[#3961fb]'
                            onClick={() => goLogin(false)}
                        />
                        <Button
                            text={'Đăng ký'}
                            textColor='text-white'
                            bgColor='bg-[#3961fb]'
                            onClick={() => goLogin(true)}
                        />
                    </div>}
                 {isLoggedIn && 
                    <div className='flex items-center  relative'>
                    
                        <Button
                            text={'Đăng xuất'}
                            textColor='text-white'
                            bgColor='bg-red-700'
                           onClick={()=> dispatch(actions.logout())}
                           
                        />
                    </div>
                 }
            </div>
            
        </div>
    );
}

export default Header;
