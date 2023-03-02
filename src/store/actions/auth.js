import actionTypes from './actionTypes'
import {apiRegister, apiLogin} from '../../services/auth'
export const register = (payload)=> async (dispatch) =>{
    try {
        const respone = await apiRegister(payload)
        console.log(respone)
        if (respone?.data.err ===0){
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: respone.data.tokken
            })
        }
        else {
             dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: respone.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data:null
        })
    }
}
export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token
            })
        } else {
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                data: response.data.msg
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            data: null
        })
    }
}

export const logout = ()=> ({
    type: actionTypes.LOGOUT
})