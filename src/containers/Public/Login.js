import React, {useState, useEffect} from 'react';
import { InputForm, Button } from '../../components';
// import { apiRegister } from '../../services/auth';
import { useLocation,  useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions'
import {useDispatch, useSelector} from 'react-redux'
const Login = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn, msg, update } = useSelector(state => state.auth)
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [invalidFields, setInvalidFields] = useState([]);
    const [payload, setPayload]= useState({
        phone: '',
        password:'',
        name: ''
    })
    useEffect(()=> {
        setIsRegister(location.state?.flag)
    },[location.state?.flag])
    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])
    const handleSubmit = async () => {
        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }
        let invalids = validate(finalPayload)
        if (invalids === 0) isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload))
    }
    const validate = (payload) => {
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            }
        })
        fields.forEach(item => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length < 6) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
                        }])
                        invalids++
                    }
                    break;
                case 'phone':
                    if (!+item[1]) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ.'
                        }])
                        invalids++
                    }
                    break

                default:
                    break;
            }
        })
        return invalids
    }
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-8'>
                <h3 className='font-semibold text-2xl mb-3'>{isRegister? 'Dang ky tai khoan': 'Đăng nhập'}</h3>

                <div className='w-full flex flex-col gap-3 mb-7'>
                    {isRegister && <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Ho ten'} value={payload.name} setvalue={setPayload} keyPayload={'name'}/>}
                     <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Phone number'} value={payload.phone} setvalue={setPayload} keyPayload={'phone'}/>
                     <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Password'} value={payload.password} setvalue={setPayload} keyPayload={'password'} type='password'/>
                 </div>

                 <Button
                     text={isRegister ? 'Đăng ky' : 'Đăng nhập'}
                        bgColor='bg-secondary1'
                        textColor='text-white'
                        fullWidth
                        onClick={handleSubmit}
                 />

                <div className='mt-7  flex items-center justify-between'>
                    {isRegister ? 
                            <small>Ban da co tai khoan? 
                                <span  className='text-blue-500 hover:underline cursor-pointer'
                                 onClick={() => 
                                {setIsRegister(false)
                                    setPayload({
                                    phone: '',
                                    password: '',
                                    name: ''
                                })
                                
                                }}>Dang nhap ngay</span></small>
                            :
                        <>
                             <small className='text-[blue] hover:text-[red] cursor-pointer'> Ban quen mat khau</small>
                            <small 
                                onClick={()=>
                                     {setIsRegister(true)
                                      setPayload({
                                            phone: '',
                                            password: '',
                                            name: ''
                                        })
                                            
                                    }} 
                               className='text-[blue] hover:text-[red] cursor-pointer'> Tao tai khoan moi</small>
                        </>                
                    }
                   
                 </div>
            </div>
            
           
        </div>
    );
}

export default Login;
