import './Banner.css'

const Banner = () => {

    return (<>
        <section className='banner-part'>
            <div className="product-container">
                <div className='product-galary'>


                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <div className="banner-left-image h-100 ">
                                <img src="/public/banner/bannerone.png" className='banner-background img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className='banner-details'>
                                <h3 className='banner-title'>Women Collection</h3>
                                <h3 className="sub-title">Peaky Blinders</h3>
                                <h3 className='banner-description-title'><u>DESCRIPTION</u></h3>
                                <p className='banner-description-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.
                                </p>

                                <div className='size-selector'>
                                    <h6 className="size-label">size :</h6>
                                    <h6 className='size-option'>M</h6>
                                </div>
                                <h6 className='price'> $100<span className='pricedot'>.00</span></h6>
                                <button type="button" className='btnbuy'>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* features*/}

                <div className="features">
                    <div className="feature-box d-flex">
                        <div className='feature-list d-flex'>
                            <div className="feature-icon">
                                <img src="/banner/quality.png" className=" w-100 img-fluid" alt="High Quality" />
                            </div>
                            <div className="feature-content">
                                <h4 className="feature-title">High Quality</h4>
                                <h4 className="feature-text">crafted from top materials</h4>
                            </div>
                        </div>

                        <div className='feature-list d-flex'>
                            <div className="feature-icon">
                                <img src="/banner/true-img.png" className=" w-100 img-fluid" alt="High Quality" />
                            </div>
                            <div className="feature-content">
                                <h4 className="feature-title">Warrany Protection</h4>
                                <h4 className="feature-text">Over 2 years</h4>
                            </div>
                        </div>

                        <div className='feature-list d-flex'>
                            <div className="feature-icon ">
                                <img src="/banner/box-img.png" className=" w-100 img-fluid" alt="High Quality" />
                            </div>
                            <div className="feature-content">
                                <h4 className="feature-title">Free Shipping</h4>
                                <h4 className="feature-text">Order over 150 $</h4>
                            </div>
                        </div>

                        <div className='feature-list d-flex'>
                            <div className="feature-icon">
                                <img src="/banner/call-img.png" className=" w-100 img-fluid" alt="High Quality" />
                            </div>
                            <div className="feature-content">
                                <h4 className="feature-title">24 / 7 Support</h4>
                                <h4 className="feature-text">Dedicated support</h4>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </section>
    </>)

}
export default Banner;