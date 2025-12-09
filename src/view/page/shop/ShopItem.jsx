import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShopItem = (props) => {


    const navigate = useNavigate();

    function handleClick(id) {
        // alert("hello";)
        navigate(`/shopDetails/${id}`);
    }

    

    return (<>
        <div className={"col-4"} >
            <div className="products-content" onClick={(e) => handleClick(props.id)}>
                <div className="products-img">
                    <img src={props.image} className="w-100 img-fluid" alt="" />
                </div>
                <div className="products-details mt-3">
                    <h3 className="products-name">{props.name}</h3>
                    <h4 className="products-price">{props.price}</h4>
                    <h4 className="discount-price">
                        <span className="sale-price"><del>{props.discount}</del></span>
                    </h4>

                    <del>{props.del}</del>
                </div>
                <div className="d-flex gap-2">
                    <div className="choose-color">{props.color1}</div>
                    <div className="choose-color1">{props.color2}</div>
                </div>
            </div>
        </div>
    </>)

}
export default ShopItem;