import valueReducer from "./reducer/value-reducer";
import postReducer from "./reducer/post-reducer";

let store = {
    _state : {
        posts: [
            {id: 1, user: "default", msg: "hello world"}
        ],

        postValue: '',
    },

    getState() {
        return this._state;
    },

    /*Использование приватных методов до редьюсеров*/

    // _setPost(){
    //     this._state.posts.push(
    //         {
    //             id: Math.floor(Math.random() * Math.floor(20)),
    //             user: "default",
    //             msg: this._state.postValue
    //         }
    //     );
    //     this._setPostValue('');
    // },
    //
    // _setPostValue(msg) {
    //     this._state.postValue = msg;
    // },

    dispatch(actionType, msg = null){
        this._state = postReducer(this._state, actionType);
        this._state = valueReducer(this._state, actionType, msg);
        this.renderDom();

        /*Замена редьюсерами приватных методов*/
        // if (actionType === 'SET_POST'){
        //     this._setPost();
        // } else if (actionType === 'SET_POST_VALUE' && msg !== null) {
        //     this._setPostValue(msg)
        // }
    },

    renderDom(){},
    subscriber(observer) {
      this.renderDom = observer;
    }
};

export const actionPostCreator = () => ({type: 'SET_POST'});
export const actionValueCreator = () => ({type: 'SET_POST_VALUE'});

// export default store;
// window.store = store;