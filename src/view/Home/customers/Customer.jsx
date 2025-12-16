
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import './Customer.css'
const Customer = () => {

    const sliderRef = useRef(null);

    const settings = {
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };




    return (<>

        <section className='customers-section'>
            <div className="container">
                <div className='customers-review'>
                    <div className="pt-5">
                        <div className='customers-title text-center'>
                        This Is What Our Customers Say
                    </div>

                    <div className="customber-desc text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                    </div>
                    </div>

                    <div className="customer-slider">
                        <Slider ref={sliderRef} {...settings}>
                            {/* 1 */}
                            <div className="customer-cart">
                                <div className="card-inner d-flex">
                                    <div className="cust-photo">
                                        <img src="/customer/c-1.svg" alt="Test" className="customer-img" />
                                    </div>
                                    <div className="cust-review-part">
                                        <div className='cust-title'>
                                            "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
                                        </div>

                                        <div className="cust-star pt-2 d-flex align-items-center ">
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="cust-name">James K.</h3>
                                            <p className="work">Traveler</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="customer-cart">
                                <div className="card-inner d-flex">
                                    <div className="cust-photo">
                                        <img src="/customer/c-2.svg" alt="Test" className="customer-img" />
                                    </div>
                                    <div className="cust-review-part">
                                        <div className='cust-title'>
                                            “Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”
                                        </div>

                                        <div className="cust-star pt-2 d-flex align-items-center ">
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="cust-name">James K.</h3>
                                            <p className="work">Traveler</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="customer-cart">
                                <div className="card-inner d-flex">
                                    <div className="cust-photo">
                                        <img src="/customer/c-3.svg" alt="Test" className="customer-img" />
                                    </div>
                                    <div className="cust-review-part">
                                        <div className='cust-title'>
                                            “Items That I ordered were the best investment I ever made. I can't say enough about your quality service."
                                        </div>

                                        <div className="cust-star pt-2 d-flex align-items-center ">
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="cust-name">Suzan B.</h3>
                                            <p className="work">UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="customer-cart">
                                <div className="card-inner d-flex">
                                    <div className="cust-photo">
                                        <img src="/customer/c-1.svg" alt="Test" className="customer-img" />
                                    </div>
                                    <div className="cust-review-part">
                                        <div className='cust-title'>
                                            "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"
                                        </div>

                                        <div className="cust-star pt-2 d-flex align-items-center ">
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="cust-name">James K.</h3>
                                            <p className="work">Traveler</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className="customer-cart">
                                <div className="card-inner d-flex">
                                    <div className="cust-photo">
                                        <img src="/customer/c-2.svg" alt="Test" className="customer-img" />
                                    </div>
                                    <div className="cust-review-part">
                                        <div className='cust-title'>
                                            “Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”
                                        </div>

                                        <div className="cust-star pt-2 d-flex align-items-center ">
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="cust-name">James K.</h3>
                                            <p className="work">Traveler</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 6 */}
                            <div className="customer-cart">
                                <div className="card-inner d-flex">
                                    <div className="cust-photo">
                                        <img src="/customer/c-3.svg" alt="Test" className="customer-img" />
                                    </div>
                                    <div className="cust-review-part">
                                        <div className='cust-title'>
                                            “Items That I ordered were the best investment I ever made. I can't say enough about your quality service."
                                        </div>

                                        <div className="cust-star pt-2 d-flex align-items-center ">
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                            <img src="/NewArrivals/star.png" className='cust-rating' alt="rating star" />
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="cust-name">Suzan B.</h3>
                                            <p className="work">UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>

                        <div className='slider-icon gap-4 d-flex mt-5 pt-5 justify-content-center align-items-center'>
                            <div className='slider-btn  ' onClick={() => sliderRef.current.slickPrev()} >
                                <img src="/deals/slider-left.png" className='slider-icon-left ' alt="left slider" />

                            </div>

                            <div className='slider-btn' onClick={() => sliderRef.current.slickNext()}  >
                                <img src="/deals/slider-right.png" className='slider-icon-right ' alt="right slider" />
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </section >

    </>)


}
export default Customer;