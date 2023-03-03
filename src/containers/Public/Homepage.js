import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/img/bct.png';
import {TinTuc, Pagination} from './index'
import { useSearchParams} from 'react-router-dom';


const Homepage = () => {

    const [params] = useSearchParams()
    return (
        <div className='boder boder-red-500 w-full flex flex-col gap-3 m-10 bg-white'>
           
           <div className='w-full flex gap-4'>
                <div className='w-[65%]'>
                    <TinTuc page={params.get('page')}/>
                    <Pagination page={params.get('page')}/>
                </div>

                <div className='w-[35%] border border-red-600' >
                    Sidebar
                </div>
           </div>
        </div>
    );
}

export default Homepage;
