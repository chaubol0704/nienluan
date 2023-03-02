import React from 'react';

const InputForm = ({label, value, setvalue, keyPayload, invalidFields, setInvalidFields, type}) => {
    return (
        <div>
            <label htmlFor='phone' className=''>{label}</label>
            <input
                type={type || "text"}
                id = "phone"
                className='outline-none bg-[#e8f0fe] rounded-md p-2 w-full'
                value={value}
                onChange={(e) => setvalue(prev => ({...prev,[keyPayload]: e.target.value}))}
                 onFocus={() => setInvalidFields([])}
            
            />
            {invalidFields.length > 0 && invalidFields.some(i => i.name === keyPayload) && <small className='text-red-500 italic' >{invalidFields.find(i => i.name === keyPayload)?.message}</small>}
        </div>
    );
}

export default InputForm;
