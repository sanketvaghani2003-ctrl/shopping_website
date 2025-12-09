import { useEffect, useState } from 'react';
import './ShoppingCart.css'
import axios from 'axios';
// import Header from '../../../Home/Navbar/Header';
import { useNavigate } from 'react-router-dom';
import Subscribe from '../../Home/Subscribe/Subscribe';
import Footer from '../../footer/Fotter';

const ShoppingCart = () => {

    const [quantity, setQuantity] = useState(1);
    const [viewProduct, setViewProduct] = useState();
    const navigate = useNavigate();

    function increaseQty() {
        setQuantity(quantity + 1);
    }

    function decreaseQty() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    let formdata = new FormData();
    formdata.append("user_id", 26);

    useEffect(() => {
        axios.post("https://studiogo.tech/student/shoppingapi/viewcart.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            if (response.status == 200) {
                let json = response.data;
                setViewProduct(json);
            }
        }).catch((error) => {
            alert(error);
        })
    }, [])

    function handleCheckOut() {
        navigate("/checkout");
    }


    return (<>

        <div className="shopping_Cart_section">
            <div className="container">
                <h3 className="shopping_title text-center">Shopping Cart</h3>
                <div className='page-show text-center d-flex justify-content-center gap-2'>
                    <h4 className='page-change'>Home</h4>
                    <img src="/public/shoppingCart/greaterthen.svg" className='img-fluid ' alt="" />
                    <h4 className='page-change'>Your Shopping Cart</h4>
                </div>

                <div className='shopping_Cart__details'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>price</th>
                                <th>qty</th>
                                <th>total</th>
                            </tr>
                        </thead>



                        <tbody>
                            {
                                viewProduct && viewProduct.map((obj) => {
                                    return (<>
                                        <tr >
                                            <td className='product-info'>
                                                <div className='d-flex'>
                                                    <img src={obj.img1} width={200} className='img-fluid' alt="product" />
                                                    <div className='card-views'>
                                                        <h6 class='product_name'>{obj.title}</h6>
                                                        <p className='color'>Color : Red</p>
                                                        <div className='mt-2'>
                                                            <a href="" className='remove-link '>Remove</a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='productview_price'>${obj.price}</td>

                                            <td>
                                                <div className='product-quntity-number'>
                                                    <button type="button" onClick={decreaseQty}>-</button>
                                                    <button type="button"> {obj.qty}</button>
                                                    <button type="button" onClick={increaseQty}>+</button>
                                                </div>
                                            </td>

                                            <td className='productview_price'>$14.90</td>
                                        </tr>

                                    </>)
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='product-checkout '>
                    <div className='d-flex gap-2'>
                        <input type="checkbox" name="myCheckbox" id="myCheckbox" />
                        <p className='product-wrap'>For <span className='price-product'> $10.00 </span>please wrap the product</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='subtotal '>Subtotal</p>
                        <h6 className='subtotal-price'>$100.00</h6>
                    </div>
                    <button type="button" onClick={handleCheckOut} className='btn-Checkout'>Checkout</button>
                    <div className=' view-prices mt-2 text-center'>
                        <a href="" className='view-cart'>View Cart</a>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>

    </>)
}

export default ShoppingCart;