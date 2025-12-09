const ArrivalsProduct = (props) => {

    return (<>

        <div className="col-12 col-lg-4">
            <div className="product-menu">
                <div className='product-item text-center'>
                <img src={props.image} className=' img-fluid' alt="Shiny Dress" />
                </div>

                <div className='product-details'>
                    <div className="row">
                        <div className="col-6">
                            <div className="product-title">
                                {props.title}
                            </div>
                            <div className='product-subtitle'>
                                {props.subtitle}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="product-rating">
                                <img src={props.star} className='img-fluid' alt="rating star"  />
                                <img src={props.star} className='img-fluid' alt="rating star" />
                                <img src={props.star} className='img-fluid' alt="rating star" />
                                <img src={props.star} className='img-fluid' alt="rating star" />
                                <img src={props.star} className='img-fluid' alt="rating star" />
                            </div>
                        </div>

                        <div className='cust-review'>
                            {props.review}
                        </div>

                        <div className='product-price-info'>
                            <div className="row">
                                <div className="col-6">
                                    <div className="product-price">
                                        {props.price}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="sold-out ">
                                        {props.soldout}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>)
}
export default ArrivalsProduct;