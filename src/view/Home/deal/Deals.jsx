import './Deals.css'
import './../../../css/App.css'
import { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";





const Deals = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 6,
        minutes: 5,
        seconds: 30,
    });

    const sliderRef = useRef(null); // to control slider

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes -= 1;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours -= 1;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days -= 1;
                            } else {
                                clearInterval(timer);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value) => value.toString().padStart(2, "0");


    // img slider part code

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: false,
    };



    return (
        <>

            <section className='deals-section' id="deals">
                <div className="deal-wrapper">
                    <div className="delas-main">
                        <div className="row">
                            <div className="col-12 col-lg-5">
                                <div className='delas-content'>
                                    <h3 className="deal-title">
                                        Deals Of The Month
                                    </h3>

                                    <p className='deal-subtitle'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Scelerisque duis ultrices sollicitudin aliquam sem.
                                        Scelerisque duis ultrices sollicitudin
                                    </p>

                                    <button type="button" className='buy-btn '>BUY NOW</button>

                                    <p className='promo-banner '>
                                        Hurry, Before It’s Too Late!
                                    </p>

                                    <div className="countdown-container">
                                        <div className="countdown-item">
                                            <h6 className="countdown-box">{formatTime(timeLeft.days)}</h6>
                                            <span className="countdown-label">Days</span>
                                        </div>
                                        <div className="countdown-item">
                                            <h6 className="countdown-box">{formatTime(timeLeft.hours)}</h6>
                                            <span className="countdown-label">Hr</span>
                                        </div>
                                        <div className="countdown-item">
                                            <h6 className="countdown-box">{formatTime(timeLeft.minutes)}</h6>
                                            <span className="countdown-label">Mins</span>
                                        </div>
                                        <div className="countdown-item">
                                            <h6 className="countdown-box">{formatTime(timeLeft.seconds)}</h6>
                                            <span className="countdown-label">Sec</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-7">
                                <div className="slider-container object-cover object-top   ">
                                    <Slider ref={sliderRef} {...settings}>
                                        <div className='position-absolute'>
                                            <img src="/public/deals/img1.png" className=' deal-model img-fluid' alt="black dress girl" />
                                        </div>

                                        <div>
                                            <img src="/public/deals/img2.png" className=' deal-mode  img-fluid' alt="black dress girl" />
                                        </div>
                                        <div>
                                            <img src="/public/deals/img3.png" className=' deal-model  img-fluid' alt="black dress girl" />
                                        </div>

                                        <div>
                                            <img src="/public/deals/img1.png" className=' deal-model  img-fluid' alt="black dress girl" />
                                        </div>
                                        <div>
                                            <img src="/public/deals/img2.png" className=' deal-mode  img-fluid' alt="black dress girl" />
                                        </div>
                                        <div>
                                            <img src="/public/deals/img3.png" className=' deal-model  img-fluid' alt="black dress girl" />
                                        </div>
                                    </Slider>
                                </div>




                                <div className='position-relative'>
                                    <div className='slider-icon gap-4 d-flex position-absolute'>
                                        <div className='slider-btn ' onClick={() => sliderRef.current.slickPrev()}>
                                            <img src="/public/deals/slider-left.png" className=' slider-icon-left ' alt="left slider" />

                                        </div>

                                        <div className='slider-btn' onClick={() => sliderRef.current.slickNext()} >
                                            <img src="/public/deals/slider-right.png" className='  slider-icon-right ' alt="right slider" />
                                        </div>
                                    </div>
                                </div>

                                <div className='sale-offer'>
                                    <h6 className='spring-sale'>01 --- Spring Sale</h6>
                                    <h6 className='discount-off'>30% OFF</h6>
                                </div>
                            </div>
                        </div>{/* end row */}


                    </div>
                </div>

            </section>
        </>

    )
}
export default Deals;
