import actionTypes from "../actions/actionTypes";

const initState = {
    posts: [], 
    msg: '',
    count: 0,
}

const postReducer = (state= initState, action) => {

    // console.log(action);
    switch (action.type) {
        
        case actionTypes.GET_POSTS:
        //    return{
        //     ...state,
        //     posts: action.data.respone || [],
        //     msg: action.data.msg || ''
        //    }
        case actionTypes.GET_POSTSLIMIT:
           return{
            ...state,
            posts: action.data.respone.rows || [],
            msg: action.data.msg || '',
            count: action.count.respone.count || 0
           }
    
        default:
            return state;
    }
}


export default postReducer