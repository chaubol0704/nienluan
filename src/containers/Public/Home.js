import React from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className='w-full m-auto h-full border boder-red-500'>
            <Header/>
            <Navigation/>
            <div className='w-full flex flex-col items-center'>
                <Outlet />  
            </div>
        </div>
    );
}

export default Home;
