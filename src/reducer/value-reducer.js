import {initialState} from '../redux-store/initialState'

const SET_ARTICLE_VALUE = 'SET_ARTICLE_VALUE';
const SET_ARTICLE_POST = 'SET_ARTICLE_POST';

let valueReducer = (state = initialState, action) => {
   // console.log(state.about)

    // switch (action.type) {
    //     case SET_POST_VALUE:
    //         state.postValue = action.text;
    //         return state;
    //
    //     default: return state;
    // }

    /*Работа с копаией стейта????*/
    switch (action.type) {
        case SET_ARTICLE_VALUE:
            console.log('set article value')
            return {...state, about: {posts: [...state.about.posts], postValue: action.text}};

        case SET_ARTICLE_POST:
            console.log('set article post')
            return {...state, about: {posts: [ ...state.about.posts,  {
                    id: Math.floor(Math.random() * Math.floor(20)),
                    user: "default",
                    msg: state.about.postValue
                }]}};

        default: return state;
    }
};

export default valueReducer;