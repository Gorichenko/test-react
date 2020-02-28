import {combineReducers, createStore} from "redux";
import valueReducer from "../reducer/value-reducer";
import postReducer from "../reducer/post-reducer";
import userReducer from "../reducer/user-reducer";

let reducers = combineReducers({
    valueRd: valueReducer,
    postRd: postReducer,
    userRd: userReducer
});

const store = createStore(reducers);

export default store;