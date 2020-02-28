import React from 'react';

const Footer = () => {
    return (

        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="footer-widget">
                            <div className="footer-logo">

                            </div>
                            <ul className="footer-nav">
                                <li>Privacy Policy</li>
                                <li>Advertisement</li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-widget">
                                    <h3 className="footer-title">About Us</h3>
                                    <ul className="footer-links">
                                        <li>About Us</li>
                                        <li>Join Us</li>
                                        <li>Contacts</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-widget">
                                    <h3 className="footer-title">Catagories</h3>
                                    <ul className="footer-links">
                                        <li>Web Design</li>
                                        <li>JavaScript</li>
                                        <li>Css</li>
                                        <li>Jquery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3 className="footer-title">Join our Newsletter</h3>
                            <div className="footer-newsletter">
                                <form>
                                    <input className="input" type="email" name="newsletter"
                                           placeholder="Enter your email"/>
                                        <button className="newsletter-btn"><i className="fa fa-paper-plane"></i>
                                        </button>
                                </form>
                            </div>
                            <ul className="footer-social">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-google-plus"></i></li>
                                <li><i className="fa fa-pinterest"></i></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
    );
}
export default Footer;
