import React,{ memo } from 'react'

const images = []

const Item = ({image,title}) => {
  return (
    <div className='w-full flex items-center p-10 ml-10'>
        <div className='w-2/5'>          
            <img src={image}          
                alt=""
                className='object-cover w-[330px] h-[200px]'                
                />
        </div>

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