import React, { memo } from 'react'

const Button = ({text, textColor, bgColor, onClick,fullWidth,px}) => {
    
    
    return (
        <button
            type='button'
            className={`py-2 ${textColor} ${px ? px : 'px-2'} ${bgColor} ${fullWidth && 'w-full'}  outline-none rounded-md hover:underline flex items-center justify-center gap-2`} 
            onClick={onClick}
            >
           <span>
                {text}
            </span> 
        </button>
    );
}

export default memo(Button)
