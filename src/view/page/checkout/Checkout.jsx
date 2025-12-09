import { useEffect, useState } from 'react';
import './Checkout.css'
import axios from 'axios';
import Subscribe from '../../Home/Subscribe/Subscribe';
import Footer from '../../footer/Fotter';

const Checkout = () => {

    const [userId, setUserId] = useState("");
    const [totalAmt, setTotalAmt] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [pincode, setPincode] = useState("");
    const [orderResponse, setOrderResponse] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [viewproduct, setViewProduct] = useState([]);
    const [total, setTotal] = useState("0");

    const [discountCode, setDiscountCode] = useState("");
    const [discountAmount, setDiscountAmount] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const [appliedCode, setAppliedCode] = useState(null);
    const [codeMessage, setCodeMessage] = useState("");


    function inputuserId(e) {
        setUserId(e.target.value);
    }

    function inputtotalAmt(e) {
        setTotalAmt(e.target.value);
    }

    function inputAddress1(e) {
        setAddress1(e.target.value);
    }

    function inputAddress2(e) {
        setAddress2(e.target.value);
    }

    function inputpincode(e) {
        setPincode(e.target.value);
    }



    function handleOrder(e) {
        e.preventDefault();

        //Payment

        var params = {
            "amount": finalTotal
        }

        axios.post("https://studiogo.tech/student/shoppingapi/create_payment.php", params).then((response) => {

            if (response.status == 200) {
                var json = response.data;
                const options = {
                    key: "rzp_test_aro7DmNCYha043",          // from dashboard
                    amount: parseFloat(json.amount) * 100,        // paise
                    currency: "INR",
                    name: "Amazon Store",
                    order_id: json.id,
                    handler: function (response) {
                        alert("Payment Success!");
                        let formdata = new FormData();
                        formdata.append("userid", sessionStorage.getItem("user_id"));
                        formdata.append("totalAmt", totalAmt);
                        formdata.append("address1", address1);
                        formdata.append("address2", address2);
                        formdata.append("pincode", pincode);
                        formdata.append("totalAmt", (finalTotal || 0).toString()); // send discounted total
                        if (appliedCode) formdata.append("discount_code", appliedCode.code);
                        if (discountAmount) formdata.append("discount_amount", discountAmount.toString());

                        // Delivery API
                        axios.post("https://studiogo.tech/student/shoppingapi/add_order.php", formdata, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then((response) => {
                            if (response.status == 200) {
                                let json = response.data;
                                setOrderResponse(json);
                                alert("Order Created!");
                            }
                        }).catch((error) => {
                            console.log(error);
                            setErrorMsg("Something went wrong. Please try again.");
                        })

                    },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();

            }

        }).catch((error) => {
            console.log(error);
        })

        // create order from php
        // const order = await fetch("http://localhost/create_order.php", {
        // method: "POST",
        // headers: {"Content-Type": "application/json"},
        // body: JSON.stringify({ amount: 500 }) // Rs. 500
        // }).then(res => res.json());




    }



    useEffect(() => {

        let formdata = new FormData();
        formdata.append("user_id", 26);

        axios.post("https://studiogo.tech/student/shoppingapi/viewcart.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            if (response.status == 200) {
                let json = response.data;
                // console.log(json);
                setViewProduct(json);
            }
        }).catch((error) => {
            setViewProduct(error);
        })
    }, [])


    // Total price API
    // useEffect(() => {

    //     let formdata = new FormData();
    //     formdata.append("user_id", 26);

    //     axios.post("https://studiogo.tech/student/shoppingapi/viewcarttotal.php", formdata, {
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         }
    //     }).then((response) => {
    //         if (response.status == 200) {
    //             let json = response.data;
    //             setTotal(json.total)
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }, [])


    useEffect(() => {
        let formdata = new FormData();
        formdata.append("user_id", 26);

        axios.post("https://studiogo.tech/student/shoppingapi/viewcarttotal.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            if (response.status === 200) {
                let json = response.data;
                const t = parseFloat(json.total) || 0;
                setTotal(t);
                setFinalTotal(t);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    function applyDiscount() {
        setCodeMessage("");
        const code = (discountCode || '').trim().toUpperCase();
        if (!code) {
            setCodeMessage('Please enter a discount code.');
            return;
        }

        const DISCOUNT_CATALOG = {
            '10': { type: 'percent', value: 10, message: '10% off' },
            '30': { type: 'percent', value: 20, message: '20% off (min 100)', minCart: 100 },
            '50': { type: 'flat', value: 50, message: 'Flat 50 off' }
        };

        const meta = DISCOUNT_CATALOG[code];
        if (!meta) {
            setCodeMessage('Invalid or expired code.');
            return;
        }

        const cartTotal = parseFloat(total) || 0;
        if (meta.minCart && cartTotal < meta.minCart) {
            setCodeMessage(`Code requires minimum cart value of ${meta.minCart}.`);
            return;
        }

        let d = 0;
        if (meta.type === 'percent') {
            d = Math.round(cartTotal * (meta.value / 100) * 100) / 100;
        } else if (meta.type === 'flat') {
            d = Math.round(parseFloat(meta.value) * 100) / 100;
        }

        if (d > cartTotal) d = cartTotal;
        d = Math.round(d * 100) / 100;

        setDiscountAmount(d);
        setFinalTotal(Math.round((cartTotal - d) * 100) / 100);
        setAppliedCode({ code, ...meta });
        setCodeMessage(meta.message ? `${meta.message} applied.` : `Code ${code} applied.`);
    }

    function removeDiscount() {
        setDiscountCode('');
        setDiscountAmount(0);
        setAppliedCode(null);
        setFinalTotal(parseFloat(total) || 0);
        setCodeMessage('Discount removed.');
    }







    return (<>
        <div className="product-payment-details">
            <div className="product-container">
                <div className="product-wrapper">
                    <div className="product-checkout-title">
                        <h3 className="title-checkout text-center">FASCO Demo Checkout</h3>
                    </div>

                    <hr />
                </div>

                <div className='checkout-body '>
                    <div className="row">
                        <div className="col-6">
                            <div className='checkout_info'>
                                <form method='post' onSubmit={handleOrder} action="">
                                    <div className='form-group'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3 className="section-title">Contact</h3>
                                            <p> Have an account? <a href="/signUp">Create Account</a></p>
                                        </div>
                                        <input type="email" name="email" id="email" placeholder='Email Address' required />
                                    </div>

                                    <div className='form-group-delivery'>
                                        <h2 className='section-title'>Delivery</h2>



                                        <div className="form-row">

                                            <input type="text" value={address1} onChange={inputAddress1} name='lname' id='lname' placeholder="address_line_1" required />
                                        </div>
                                        <input type="text" value={address2} onChange={inputAddress2} name='address' id='address' placeholder="address_line_2" required />

                                        <div className="form-row">
                                            <input type="number" value={pincode} onChange={inputpincode} name='pincode' id='pincode' placeholder="Postal Code" required />
                                        </div>

                                        <label className="checkbox-row">
                                            <input type="checkbox" />
                                            <span>Save This Info For Future</span>
                                        </label>
                                    </div>

                                    <button type="submit" className='btn-pay text-center'>Pay Now</button>
                                    {orderResponse && (
                                        <p className="text-success mt-2">Order placed successfully!</p>
                                    )}
                                    {errorMsg && (
                                        <p className="text-danger mt-2">{errorMsg}</p>
                                    )}
                                    <p className='copyright text-center'>Copyright © 2022 FASCO . All Rights Reseved.</p>

                                </form>

                            </div>


                        </div>
                        <div className="col-6">
                            <div className="checkout-product">
                                {
                                    viewproduct && viewproduct.map((obj) => {
                                        return (<>
                                            <div className='checkout__product'>
                                                <div className="checkout-product__wrapper d-flex">
                                                    <img src={obj.img1} width={200} className="checkout-product__image img-fluid" alt="Product image" />
                                                    <div className="checkout-product_info">
                                                        <p className="checkout-product_title">{obj.title}</p>

                                                        <div className="checkout-product_details d-flex justify-content-between align-items-center">
                                                            <p className="checkout-product_color">{obj.qty} X ${obj.price} = </p>
                                                            <p className="checkout-product_price">${obj.price * obj.qty}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="discount-row">
                                                    <input className="discount-input" type="text" placeholder="Discount code" />
                                                    <button className="btn-discount">Apply</button>
                                                </div> */}

                                                {/* CART-LEVEL discount input */}
                                                <div className="discount-row mt-3">
                                                    <input className="discount-input" type="text" placeholder="Discount code" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} disabled={!!appliedCode} />

                                                    <button type="button" className="btn-discount" onClick={applyDiscount} disabled={!discountCode.trim() || !!appliedCode}>{appliedCode ? 'Applied' : 'Apply'} </button>

                                                    {appliedCode && (
                                                        <button type="button" className="btn-discount ms-2" onClick={removeDiscount}>
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>

                                                {codeMessage && <p className="mt-2 small">{codeMessage}</p>}

                                                {/* Totals */}
                                                <div className='price-total mt-3'>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="subtotal">Subtotal</p>
                                                        <p className="subtotal_price">${(parseFloat(total) || 0).toFixed(2)}</p>
                                                    </div>

                                                    {discountAmount > 0 && (
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="discount">Discount</p>
                                                            <p className="discount_price">- ${(discountAmount).toFixed(2)}</p>
                                                        </div>
                                                    )}

                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="total fw-bold">Final Total</p>
                                                        <p className="total_price fw-bold">${(parseFloat(finalTotal) || 0).toFixed(2)}</p>
                                                    </div>
                                                </div>


                                                <div>
                                                    {
                                                        total && <div className='price-total'>
                                                            <div className=" d-flex justify-content-between align-items-center">
                                                                <p className="total">Total</p>
                                                                <p className=" total_price">${total}</p>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </>)
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Subscribe />
            <Footer />
        </div>


    </>)
}

export default Checkout;