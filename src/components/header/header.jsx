import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div id="nav">
                <div id="nav-fixed">
                    <div className="container">
                        <div className="nav-logo">
                            <span className="logo"><img src="./img/logo.png" alt=""/></span>
                        </div>

                        <ul className="nav-menu nav navbar-nav">
                            <li><NavLink to="/about" activeClassName="gold">About</NavLink></li>
                            <li><NavLink to="/posts" activeClassName="gold">Posts</NavLink></li>
                            <li><NavLink to="/users" activeClassName="gold">Users</NavLink></li>
                        </ul>

                        <div className="nav-btns">
                            <button className="aside-btn"><i className="fa fa-bars"></i></button>
                            <button className="search-btn"><i className="fa fa-search"></i></button>
                            <div className="search-form">
                                <input className="search-input" type="text" name="search"
                                       placeholder="Enter Your Search ..."/>
                                    <button className="search-close"><i className="fa fa-times"></i></button>
                            </div>
                        </div>

                    </div>
                </div>


                <div id="nav-aside">
                    <div className="section-row">
                        <ul className="nav-aside-menu">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Join Us</li>
                            <li>Advertisement</li>
                            <li>Contacts</li>
                        </ul>
                    </div>


                    <div className="section-row">
                        <h3>Recent Posts</h3>
                        <div className="post post-widget">
                            <span className="post-img"><img src="./img/widget-2.jpg" alt=""/></span>
                            <div className="post-body">
                                <h3 className="post-title">Pagedraw UI Builder Turns Your Website Design Mockup Into
                                    Code Automatically</h3>
                            </div>
                        </div>

                        <div className="post post-widget">
                            <span className="post-img"><img src="./img/widget-3.jpg" alt=""/></span>
                            <div className="post-body">
                                <h3 className="post-title">Why Node.js Is The Coolest Kid On The Backend Development
                                    Block!</h3>
                            </div>
                        </div>

                        <div className="post post-widget">
                            <span className="post-img"><img src="./img/widget-4.jpg" alt=""/></span>
                            <div className="post-body">
                                <h3 className="post-title">Tell-A-Tool: Guide To Web Design And Development Tools</h3>
                            </div>
                        </div>
                    </div>

                    <div className="section-row">
                        <h3>Follow us</h3>
                        <ul className="nav-aside-social">
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-google-plus"></i></li>
                            <li><i className="fa fa-pinterest"></i></li>
                        </ul>
                    </div>

                    <button className="nav-aside-close"><i className="fa fa-times"></i></button>

                </div>
            </div>
        </header>
    );
}
export default Header;
