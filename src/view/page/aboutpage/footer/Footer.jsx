import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">

                    {/* Left Section */}
                    <div className="footer-left">
                        <h2 className="logo">FASCO</h2>

                        <h3>Contact</h3>
                        <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                        <p><strong>Phone:</strong> +01 2222 365 </p>
                        <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>

                    {/* About */}
                    <div className="footer-links">
                        <h3>About</h3>
                        <p>About Us</p>
                        <p>Delivery Information</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Contact Us</p>
                    </div>

                    {/* My Account */}
                    <div className="footer-links">
                        <h3>My Account</h3>
                        <p>Sign In</p>
                        <p>View Cart</p>
                        <p>My Wishlist</p>
                        <p>Track My Order</p>
                        <p>Help</p>
                    </div>

                    {/* Install App */}
                    <div className="footer-install">
                        <h3>Install App</h3>
                        <p>From App Store or Google Play</p>

                        <div className="app-buttons">
                            <img src="/public/footer/gplay.jpg" className="img-fluid gpay" alt="Google Play" />
                            <img src="/public/footer/app.jpg" className="img-fluid applepay" alt=" App Store" />
                        </div>

                        <p>Secured Payment Gateways</p>
                        <img src="/public/footer/pay.png" alt="Payments" className="payments" />
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
