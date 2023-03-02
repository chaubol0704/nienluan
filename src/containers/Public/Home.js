import React from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';

import Homepage from './Homepage';
import Footer from './Footer';
import SectionThucdon from './Section_thucdon';

const Home = () => {
    return (
        <div className='w-full m-out h-full border boder-red-500 '>          
            <Header/>          
            <div className='w-full flex flex-col items-center justify-between '>
             
                <Outlet />  
                
            </div>

            
            <div className='section'>
                <SectionThucdon/>
            </div>
            
            <Footer/>
        </div>
    );
}

export default Home;
