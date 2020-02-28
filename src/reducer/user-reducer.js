import {userState} from '../redux-store/userState'

const GET_USER_LIST = 'GET_USER_LIST';

let userReducer = (state = userState, action) => {

    switch (action.type) {
        case GET_USER_LIST:
            return {...state};

        default: return state;
    }
};


export default userReducer;