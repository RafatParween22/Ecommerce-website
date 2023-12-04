import React from 'react';

function Footer() {
    return (
       <div className="main-footer">
            <div className="p-3 mb-2 bg-dark bg-gradient text-white ">
                <div className="row ">

                    <div className="col-md-3 col-sm-6">
                        <h5 className="text-black #757575">ABOUT</h5>
                        <ul className="list-unstyled">
                            <li>Contact us</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Ecommerce Stories</li>
                            <li>Press</li>
                            <li>Ecommerce Wholesale</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h5 className="text-black #757575">HELP</h5>
                        <ul className="list-unstyled">
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Returns</li>
                            <li>FAQ</li>
                            <li>Press</li>
                            <li>Report Infringement</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h5 className="text-black #757575">CONSUMER POLICY</h5>
                        <ul className="list-unstyled">
                            <li>Cancellation & Returns</li>
                            <li>Terms of Use</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>Grievance Redressal</li>
                            <li>EPR compliance</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h5 className="text-black #757575">SOCIAL</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>YouTube</li>
                            <li>Instagram</li>
                           
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom ">
                <p className="text-xs-center text-white">
                &copy;{new Date().getFullYear()}City Guide App - All Rights Reserved
                </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
