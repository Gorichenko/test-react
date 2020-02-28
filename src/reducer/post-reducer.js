import {initialState} from '../redux-store/initialState'

const SET_POST_POST = 'SET_POST_POST';
const SET_POST_VALUE = 'SET_POST_VALUE';

let postReducer = (state = initialState, action) => {
   // console.log(state);
    // switch (action.type) {
    //     case SET_POST:
    //         state.posts.push({
    //             id: Math.floor(Math.random() * Math.floor(20)),
    //             user: "default",
    //             msg: state.postValue
    //         });
    //
    //         return state;
    //
    //     default: return state;
    // }

    /*Работа с копией стейта???*/
    switch (action.type) {
        case SET_POST_POST:
            console.log('set post post');
            return {...state, post: {posts: [ ...state.post.posts,  {
                    id: Math.floor(Math.random() * Math.floor(20)),
                    user: "default",
                    msg: state.post.postValue
                }],
                postValue: state.post.postValue
            }};

        case SET_POST_VALUE:
            console.log('set post value')
            return {...state, post: {posts: [...state.post.posts], postValue: action.text}};

        default: return state;
    }
};


export default postReducer;