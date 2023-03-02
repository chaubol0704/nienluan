import React from 'react';
import {PageNumber} from '../../components'
import {useSelector} from 'react-redux'
import icons from '../../ultils/icons'

const { GrLinkNext } = icons

const Pagination = ({number}) => {

    const {count, posts} = useSelector(state => state.post)
    
    const handlePageNumber = () =>{
        let max = Math.floor(count/ posts.length)
        // console.log(count)
        // console.log(posts.length)
        let arrNumber = []
        for (let i =1 ; i<=max ;i++){
            arrNumber.push(i)
        }
        // console.log(arrNumber)
        return arrNumber.length>3 ? arrNumber.filter(i => i < 4) : arrNumber
    }
    return (
        <div className='flex  items-center justify-center gap-2 py-5'>
            {handlePageNumber().length > 0 && handlePageNumber().map(item =>{
                return(
                    <PageNumber
                        key={item} 
                        number={item}                   
                        currentPage ={number || 1} 
                    />
                    
                )    
                
            })}
            <PageNumber number={'...'}/>
            <PageNumber number={<GrLinkNext/>}/>
        </div>
    );
}

export default Pagination;
