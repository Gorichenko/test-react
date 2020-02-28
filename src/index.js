import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Content from "./components/main/mainContent";
import About from "./components/about/about";
import Posts from "./components/posts/posts";
import Footer from "./components/footer/footer";
import User from "./components/user/user";
import {BrowserRouter, Route} from "react-router-dom";
import ReactDOM from "react-dom";
import store from './redux-store/redux';
import {Provider} from 'react-redux';
import StoreContext from "./storeContext";

export let renderDom = () => {
    ReactDOM.render(
        <BrowserRouter>
            <div className="App">
                <Header/>
                {/*<Route path="/about" component={About} />*/}
                {/*<Route path="/posts" component={Posts} />*/}
                <Provider store={store}>
                    <Route path="/about" render={() => <About/>}/>
                    <Route path="/posts" render={() => <Posts/>}/>
                    <Route path="/users" render={() => <User/>}/>
                </Provider>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>, document.getElementById('root'));
};

renderDom();

window.store = store;
/*После подключения реакт-редакс сам перерисовывает компоненты с изменением стейта*/

// store.subscribe(() => {
//    renderDom();
// });

/*test users*/
/*  https://social-network.samuraijs.com/api/1.0/users  */


