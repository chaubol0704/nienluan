import React, {useEffect, memo}from 'react';
import { Item } from '../../components';
import { getPosts,getPostsLimit } from '../../store/actions/post';
import {useDispatch, useSelector} from 'react-redux'


const TinTuc = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector((state) => state.post)
    useEffect(() =>{
        // dispatch(getPosts())
        dispatch(getPostsLimit(0))
    },[])
    console.log(posts)
    return (
        <div className='w-full border border-blue-600 '>
            <div className='items'>
               
                {posts?.length>0 && posts.map(item => {
                    return(
                        
                        <Item
                        
                            key={item?.id}
                            image = {item?.images?.image}
                            title = {item?.title}
                         />
                    )
                })}
            </div>
            
        </div>
    );
}

export default memo(TinTuc);
