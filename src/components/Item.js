import React,{ memo } from 'react'
import {  useNavigate, Link } from 'react-router-dom'

const images = []

const Item = ({image,title, id}) => {
  // const navigate = useNavigate()
  return (
    <div className='w-full flex items-center p-10 ml-10'>
        <Link to={`chi_tiet/${title}/${id}`} 
            className='w-2/5'>          
            <img src={image}          
                alt=""
                className='object-cover w-[330px] h-[200px]'                
                />
        </Link>

        <div className='w-3/5'>
            <h5 className="post-title is-large ">{title}</h5>
			<div className="is-divider"></div>
			<p className="from_the_blog_excerpt text-ellipsis">
        {/* text-ellipsis: hết dòng thì chấm chấm */}
                Nhằm tri ân những khách hàng thân mến đã đồng hành cùng chúng tôi trong [...]		
            </p>
         </div>
    </div>
  )
}

export default memo(Item)