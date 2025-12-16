import { useEffect, useState } from 'react';
import './ProductsDetails.css'
// import Banner from '../../../Home/banner/Banner';
// import Subscribe from '../../../Home/Subscribe/Subscribe';
import Deals from '../../Home/deal/Deals';
import Footer from '../../footer/Fotter';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from '../../Home/banner/Banner';
import Subscribe from '../../Home/Subscribe/Subscribe';

const ProductsDetails = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 5,
        minutes: 59,
        seconds: 60,
    });

    useEffect(() => {
        const interval = setInterval(() => {
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
                                clearInterval(interval);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    // -----------------

    const color_select = [
        { name: "blue", color: "#8DB4D2" },
        { name: "Black", color: "#000000" },
        { name: "Pink", color: "#FFD1DC" },
    ];

    const [selectedColor, setSelectedColor] = useState(color_select[0]);
    // ----------

    const [quantity, setQuantity] = useState(1);
    const [addProduct, setAddProduct] = useState("");

    function increaseQty() {
        setQuantity(quantity + 1);
    }

    function decreaseQty() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }



    const { pid } = useParams();
    const [product, setProduct] = useState(null);
    const navigat = useNavigate();

    function handlePageChange() {

        let formData = new FormData();
        formData.append("user_id", 26),
            formData.append("product_id", pid),
            formData.append("qty", quantity)

        axios.post("https://studiogo.tech/student/shoppingapi/addtocart.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            if (response.status == 200) {
                let json = response.data;
                // console.log(json);
                setAddProduct(json);
                navigat("/shoppingCart");
            }
        }).catch((error) => {
            alert(error);
        })
    }



    useEffect(() => {
        if (pid) {
            axios.post("https://studiogo.tech/student/shoppingapi/single_product.php", { id: pid }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((response) => {
                if (response.status == 200) {

                    let json = response.data;
                    setProduct(json.data);
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [pid])

    if (!product) {
        return <h1>Loading product......</h1>;
    }





    return <>

        <section className='products-section'>
            {/* <h1>{pid}</h1> */}
            <div className="container">
                <div className='product__details'>
                    <div className='product-container '>
                        <div className="row">
                            <div className="col-1">
                                <div className='product-item-select'>
                                    <div className='select-item'>
                                        <img src="/product/shirt-img.svg" className='img-fluid w-100' alt="" />
                                    </div>
                                    <div className='select-item'>
                                        <img src="/product/woman-model-img.svg" className='img-fluid w-100' alt="" />
                                    </div>
                                    <div className='select-item'>
                                        <img src="/product/woman-model-img-2.svg" className='img-fluid  w-100' alt="" />
                                    </div>
                                    <div className='select-item'>
                                        <img src="/product/woman-model-img-3.svg" className='img-fluid  w-100' alt="" />
                                    </div>
                                    <div className='select-item'>
                                        <img src="/product/woman-model-img-4.svg" className='img-fluid  w-100' alt="" />
                                    </div>
                                    <div className='select-item'>
                                        <img src="/product/woman-model-img-5.svg" className='img-fluid w-100' alt="" />
                                    </div>



                                </div>
                            </div>
                            <div className="col-5">
                                <div className='product-items'>
                                    <img src={product.img1} className='img-fluid w-100' alt="" />

                                </div>
                            </div>
                            <div className="col-6">
                                <div className='product-details-container'>
                                    <h4 className='small-logo'>Fasco</h4>
                                    <h3 className='product-name'>{product.title}</h3>
                                    <div className='products-rating d-flex'>
                                        <img src="/product/star.svg" className='img-fluid ' alt="product-rating" />
                                        <img src="/product/star.svg" className='img-fluid ' alt="product-rating" />
                                        <img src="/product/star.svg" className='img-fluid ' alt="product-rating" />
                                        <img src="/product/star.svg" className='img-fluid ' alt="product-rating" />
                                        <img src="/product/star-blank.svg" className='img-fluid ' alt="product-rating" />
                                        <h4 className='rating-number'>(3)</h4>
                                    </div>
                                    <div className='price-section d-flex'>
                                        <h3 className='dis-price '>₹{product.price} <span> <del className='product-item-price'>₹59.00</del> </span></h3>
                                        <h3 className='price-save text-center'>Save 33%</h3>
                                    </div>
                                    <div className='people-view d-flex'>
                                        <img src="/product/eye.svg" className='img-fluid' alt="" />
                                        <p className='people-viewing'>24 people are viewing this right now</p>
                                    </div>
                                    <div className='end-sale'>
                                        <div className="row">
                                            <div className="col-8">
                                                <div>
                                                    <p className='sale-text'>Hurry up! Sale ends in:</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="sale-end-time d-flex">
                                                    <div className="sale-hours d-flex text-center">
                                                        <h3 className="sale-clock">
                                                            {timeLeft.days.toString().padStart(2, "0")}
                                                        </h3>
                                                        <h3 className="gem">:</h3>
                                                    </div>

                                                    <div className="sale-hours d-flex text-center">
                                                        <h3 className="sale-clock">
                                                            {timeLeft.hours.toString().padStart(2, "0")}
                                                        </h3>
                                                        <h3 className="gem">:</h3>
                                                    </div>

                                                    <div className="sale-hours d-flex text-center">
                                                        <h3 className="sale-clock">
                                                            {timeLeft.minutes.toString().padStart(2, "0")}
                                                        </h3>
                                                        <h3 className="gem">:</h3>
                                                    </div>

                                                    <div className="sale-hours text-center">
                                                        <h3 className="sale-clock">
                                                            {timeLeft.seconds.toString().padStart(2, "0")}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='stock-left'>Only <span className='stock'>9</span> item(s) left in stock!</h3>

                                    <div className='d-flex'>
                                        <div className='line-bar'></div>
                                        <div className='second-line'></div>
                                    </div>

                                    <div className='size'>
                                        <h4 className='size-number'>Size: <span className='m-size'>M</span></h4>
                                        <div className='cloth-size-series '>
                                            <button type="button" className='series'>M</button>
                                            <button type="button" className='series'>L</button>
                                            <button type="button" className='series'>XL</button>
                                            <button type="button" className='series'>XXL</button>
                                        </div>
                                    </div>

                                    <div className='color-select mt-4'>
                                        <h4>Color: <span className='color-name'>{selectedColor.name}</span> </h4>
                                        <div className='color-list d-flex gap-3'>
                                            {
                                                color_select.map((color, index) => (
                                                    <div key={index} onClick={() => setSelectedColor(color)} className={`color-circle ${selectedColor.color == color.color ? "selected" : ""}`} style={{ backgroundColor: color.color }}>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className='quntity'>
                                        <h4>Quantity</h4>
                                        <div className="row">

                                            <div className="col-3">
                                                <div className='product-quntity-number'>
                                                    <button type="button" onClick={decreaseQty}>-</button>
                                                    <button type="button">{quantity}</button>
                                                    <button type="button" onClick={increaseQty}>+</button>
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <button type="button" className='add-card'>
                                                    <h3 className='text-center' onClick={handlePageChange}>Add to cart</h3>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='action-bar d-flex '>
                                        <div className='Compare d-flex'>
                                            <img src="/product/up-down-arrow-img.svg" className='img-fluid' alt="" />
                                            <h4 className='action-title text-center '>Compare</h4>
                                        </div>

                                        <div className='question d-flex'>
                                            <img src="/product/ask-question-img.svg" className='img-fluid' alt="" />
                                            <h4 className='action-title1 text-center '>Ask a question</h4>
                                        </div>

                                        <div className='Share d-flex'>
                                            <img src="/product/share-img.svg" className='img-fluid share' alt="" />
                                            <h4 className='action-title text-center '>Share</h4>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className='delivery  d-flex '>
                                        <img src="/product/truck-img.svg" className='img-fluid ' alt="truck delivery" />
                                        <h4 className='delivery-title mb-0 '>Estimated Delivery: <span className='delivery-date'>Jul 30 - Aug 03</span></h4>
                                    </div>

                                    <div className='delivery-Shipping  d-flex '>
                                        <img src="/product/box-img.svg" className='img-fluid ' alt="truck delivery" />
                                        <h4 className='Shipping-title mb-0 '>Free Shipping & Returns: <span className='Shipping-price'> On all orders over $75</span></h4>
                                    </div>

                                    <div className='pay-card'>
                                        <img src="/product/payment -img.svg" className='img-fluid mx-auto d-block' alt="" />
                                        <p className='safe-checkout text-center'>Guarantee safe & secure checkout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
            <Deals />
            <Subscribe />
            <Footer />
        </section>

    </>
}
export default ProductsDetails;