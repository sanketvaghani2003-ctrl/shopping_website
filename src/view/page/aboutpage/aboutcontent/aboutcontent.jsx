import './aboutcontent.css'

const Aboutcontent = () => {

    const features = [
        { img: "/about/f1.png", title: "Free Shipping" },
        { img: "/about/f2.png", title: "Online Order" },
        { img: "/about/f3.png", title: "Save Money" },
        { img: "/about/f4.png", title: "Promotions" },
        { img: "/about/f5.png", title: "Happy Sell" },
        { img: "/about/f6.png", title: "24/7 Support" }
    ];
    return (<>

        <div className="container">
            <div className='about-content'>
                <div className="row">
                    <div className="col-5">
                        <div className='about-fashion-image'>
                            <img src="/about/fashion.jpg" className='img-fluid' alt="fashion img" />
                        </div>
                    </div>
                    <div className="col-7">
                        <div class="about-details">
                            <h2 className='who-we-are'>Who We Are</h2>
                            <p className='section-description'>FASCO is a modern clothing brand built with passion, creativity,and an eye for detail. We design premium outfits that blend comfort, elegance, and trend. Our mission is to deliver unique styles that boost your confidence and reflect your personality. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-support d-flex'>
                {features.map((item, index) => (
                    <div className='feature-section' key={index}>
                        <img src={item.img} className='img-fluid w-100' alt={item.title} />
                        <h6 className='feature_title'>{item.title}</h6>
                    </div>
                ))}
            </div>


        </div>

    </>)
}

export default Aboutcontent;