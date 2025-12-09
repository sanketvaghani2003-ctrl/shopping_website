import { useEffect, useState } from 'react';
import './MyOrderDetails.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MyOrderDetails = () => {

    const [orderDetails, setOrderDetails] = useState(null);
    const [product, setProduct] = useState([]);

    const { oid } = useParams();




    useEffect(() => {

        let formdata = new FormData();
        formdata.append("order_id", oid);

        axios.post("https://studiogo.tech/student/shoppingapi/myorderdetails.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            if (response.status == 200) {
                let json = response.data;
                // console.log(json);
                // setOrderDetails(json);
                // setProduct(json.items );
                setOrderDetails(response.data.orderdata);
                setProduct(response.data.items);

            }
        }).catch((error) => {
            console.log(error);
        })

    }, [oid])

    return (<>

        <div className="myOrderDetails-section">
            <div className="container">
                <div className="myorder-details">
                    <div className="row">
                        <div className="col-5">
                            <h3>orderdata</h3>
                            <div className="orderData">
                                {
                                    orderDetails &&
                                    <table className="order-table">
                                        <tbody>
                                            <tr>
                                                <th>Order ID</th>
                                                <td>{orderDetails.order_id}</td>
                                            </tr>
                                            <tr>
                                                <th>User ID</th>
                                                <td>{orderDetails.user_id}</td>
                                            </tr>
                                            <tr>
                                                <th>Total Amount</th>
                                                <td>{orderDetails.total_amount}</td>
                                            </tr>
                                            <tr>
                                                <th>Address Line 1</th>
                                                <td>{orderDetails.address_line_1}</td>
                                            </tr>
                                            <tr>
                                                <th>Address Line 2</th>
                                                <td>{orderDetails.address_line_2}</td>
                                            </tr>
                                            <tr>
                                                <th>Pincode</th>
                                                <td>{orderDetails.pincode}</td>
                                            </tr>
                                            <tr>
                                                <th>Order Date</th>
                                                <td>{orderDetails.order_date_time}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{orderDetails.status}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                }
                            </div>
                        </div>
                        <div className="col-7 ">
                            <h3>items</h3>
                            <div className='order-items-wrapper'>
                                <div className="order-item-list">
                                    {
                                        product && product.map((obj, index) => {
                                            return (
                                                <table className='item-table' key={index}>
                                                    <tbody>
                                                        <tr>
                                                            <th>Item ID</th>
                                                            <td>{obj.item_id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Product ID</th>
                                                            <td>{obj.product_id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Qty</th>
                                                            <td>{obj.qty}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Order ID</th>
                                                            <td>{obj.order_id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Subcat ID</th>
                                                            <td>{obj.subcat_id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Title</th>
                                                            <td>{obj.title}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Description</th>
                                                            <td>{obj.description}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Price</th>
                                                            <td>{obj.price}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Image</th>
                                                            <td><img src={obj.img1} alt="" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default MyOrderDetails;