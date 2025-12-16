// import { useState } from 'react';
import './Contact.css';
import Footer from '../../aboutpage/footer/Footer';
import Newsletter from '../../aboutpage/newsletter/Newsletter';

const Contactpage = () => {
    return (
        <>
            {/* Banner Section */}
            <div className='contact-section'>
                <div className='about-conatiner'>
                    <div className='contact-banner'>
                        <h2 className="banner_text">#Let's_talk</h2>
                        <p className='contact-banner_title'>
                            LEAVE A MESSAGE, We love to hear from you!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Info + Map Section */}
            <div className="contact-info-wrapper">
                <div className="container">
                    <div className="row">

                        {/* LEFT COLUMN */}
                        <div className="col-6">
                            <div className="contact-left">
                                <p className="sub-title">GET IN TOUCH</p>
                                <h2>
                                    Visit one of our agency locations
                                    <br />
                                    or contact us today
                                </h2>

                                <h3>Head Office</h3>

                                <div className="contact-item">
                                    <span className="icon">📍</span>
                                    56 Glassford Street Glasgow G1 1UL New York
                                </div>

                                <div className="contact-item">
                                    <span className="icon">✉️</span>
                                    contact@example.com
                                </div>

                                <div className="contact-item">
                                    <span className="icon">📞</span>
                                    +01 2222 365
                                </div>

                                <div className="contact-item">
                                    <span className="icon">⏰</span>
                                    Monday to Saturday: 9.00am to 5:00pm
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="col-6">
                            <div className="contact-right">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.266236529897!2d-1.2553248842254492!3d51.75481697967614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a87da0bb7b%3A0xdeb4c596cb8f179!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2suk!4v1615978297279!5m2!1sen!2suk"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="contact-form-wrapper">
                <div className="container">
                    <div className="row">

                        {/* Form Left */}
                        <div className="col-7">
                            <div className="form-left">
                                <p className="form-subtitle">LEAVE A MESSAGE</p>
                                <h2 className="form-title">We love to hear from you</h2>

                                <form className="contact-form">
                                    <input type="text" placeholder="Your Name" required></input>
                                    <input type="email" placeholder="E-mail" required></input>
                                    <input type="text" placeholder="Subject" required></input>
                                    <textarea placeholder="Your Message" required></textarea>

                                    <button className="submit-btn">Submit</button>
                                </form>
                            </div>
                        </div>

                        {/* Team Right */}
                        <div className="col-5">
                            <div className="contact-team">

                                <div className="team-box">
                                    <img src="/public/contact/m-1.jpg" className='img-fluid' alt="John" />
                                    <div>
                                        <h4>John Doe</h4>
                                        <p>Senior Marketing Manager</p>
                                        <p>Phone: + 000 123 000 77 88</p>
                                        <p>Email: johndoe@example.com</p>
                                    </div>
                                </div>

                                <div className="team-box">
                                    <img src="/public/contact/m-2.jpg" className='img-fluid' alt="William" />
                                    <div>
                                        <h4>William Smith</h4>
                                        <p>Senior Marketing Manager</p>
                                        <p>Phone: + 000 123 000 77 88</p>
                                        <p>Email: williansmith@example.com</p>
                                    </div>
                                </div>

                                <div className="team-box">
                                    <img src="/public/contact/m-3.jpg" alt="Emma" />
                                    <div>
                                        <h4>Emma Stone</h4>
                                        <p>Senior Marketing Manager</p>
                                        <p>Phone: + 000 123 000 77 88</p>
                                        <p>Email: emmastone@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
};

export default Contactpage;
