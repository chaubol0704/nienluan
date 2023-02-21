import React from 'react';

const InputForm = ({label}) => {
    return (
        <div>
            <label htmlFor='phone' className=''>{label}</label>
            <input
                type="text"
                id = "phone"
                className='outline-none bg-[#e8f0fe] rounded-md p-2 w-full'
            />
        </div>
    );
}

export default InputForm;
