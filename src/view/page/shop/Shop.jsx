import { useEffect, useState } from "react";
import "./Shop.css";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import Banner from "../../Home/banner/Banner";
import axios from "axios";
import Subscribe from "../../Home/Subscribe/Subscribe";
import Gallary from "../../Home/Follow/Gallary";
import Footer from "../../footer/Fotter";
import ShopItem from "./ShopItem";

const Shop = () => {
    const colors = [
        "#FF6C6C", "#FF7629", "#FFF06C", "#9BFF6C", "#6CFF9E", "#6CFFDC", "#6CB9FF",
        "#6CF6FF", "#6CA7FF", "#6C7BFF", "#8A6CFF", "#B66CFF", "#FC6CFF", "#FF6C6C",
    ];

    const [numb, setNumb] = useState(4);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState("");
    const productsPerPage = 5;


    const brands = ["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"];

    const collections = [
        "All products",
        "Best sellers",
        "New arrivals",
        "Accessories",
    ];

    const tags = [
        "Fashion",
        "Hats",
        "Sandal",
        "Belt",
        "Bags",
        "Snacker",
        "Denim",
        "Minimog",
        "Vagabond",
        "Sunglasses",
        "Beachwear",
    ];

    const handleItem = (item) => {
        setNumb(item);
    };



    useEffect(() => {
        setLoading(true);
        axios.get("https://studiogo.tech/student/shoppingapi/products.php").then((response) => {
            if (response.status == 200) {
                let json = response.data;
                setProduct(response.data);

            }
        }).catch((error) => {
            console.log(error);
        })
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: 250 }}>
                <div class="loader"></div>
            </div>
        )
    }

    return (
        <>
            <section className="fashion-section">
                <div className="container">
                    <div>
                        <h3 className="fashion-title text-center">Fashion</h3>
                    </div>
                    <div class="page-show text-center d-flex justify-content-center gap-2">
                        <h4 class="page-change">Home</h4>
                        <img className="img-fluid " alt="" src="/public/shoppingCart/greaterthen.svg" />
                        <h4 class="page-change">Fashion</h4>
                    </div>


                    <div className="fashion-part">
                        <div className="row">
                            <div className="col-3">
                                <div className="filter-part">
                                    <h3 className="filter">Filters</h3>
                                    <div className="filter-content">
                                        <h3 className="size">Size</h3>
                                        <div>
                                            <button type="button" className="btn-fliter">
                                                S
                                            </button>
                                            <button type="button" className="btn-fliter">
                                                M
                                            </button>
                                            <button type="button" className="btn-fliter">
                                                L
                                            </button>{" "}
                                            <br />
                                            <button type="button" className="btn-fliter mt-2">
                                                XL
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="color-container">
                                    <h3 className="colors">Colors</h3>
                                    <div className="colors-palette">
                                        {
                                            colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="colors-choose"
                                                    style={{ backgroundColor: color }}
                                                ></div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="price-details">
                                    <h3 className="price">Prices</h3>
                                    <h4 className="price-range ">₹0-₹50</h4>
                                    <h4 className="price-range">₹50-₹100</h4>
                                    <h4 className="price-range">₹100-₹150</h4>
                                    <h4 className="price-range">₹150-₹200</h4>
                                    <h4 className="price-range">₹300-₹400</h4>
                                </div>

                                <Accordion defaultActiveKey={null}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Brands</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="brands-list">
                                                {brands.map((brand, index) => (
                                                    <li key={index} className="brand-item">
                                                        <button type="button" className="btn-brand">
                                                            {brand}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Collections</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="collections-list">
                                                {collections.map((collection, index) => (
                                                    <li key={index} className="collections-item">
                                                        <button type="button" className="btn-collections">
                                                            {collection}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="tags-list">
                                    <h3 className="tags">Tags</h3>
                                    <ul className="tags-names">
                                        {tags.map((tag, index) => (
                                            <li key={index} className="tags-item">
                                                <button type="button" className="btn-tags">
                                                    {tag}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="fashion-shop">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="dropdown">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic"> Best selling</Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2"> Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else  </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="change-bar  gap-2">
                                                <div className="theme-change ">
                                                    <button> <img src="/public/fashion/icon-1.png" className=" chnage-shop-card img-fluid" alt="" /></button>
                                                </div>

                                                <div className="theme-change ">
                                                    <button onClick={(e) => handleItem(6)}><img src="/public/fashion/icon-2.png" className=" chnage-shop-card img-fluid" alt="" /></button>
                                                </div>

                                                <div className="theme-change ">
                                                    <button onClick={(e) => handleItem(4)}> <img src="/public/fashion/icon-3.png" className=" chnage-shop-card img-fluid" alt="" /></button>
                                                </div>

                                                <div className="theme-change ">
                                                    <button onClick={(e) => handleItem(2)}><img src="/public/fashion/icon-4.png" className=" chnage-shop-card img-fluid" alt="" /></button>
                                                </div>

                                                <div className="theme-change ">
                                                    <button> <img src="/public/fashion/icon-5.png" className=" chnage-shop-card img-fluid" alt="" /></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="products-parts">
                                            <div className="row">
                                                {
                                                    product && product.map((obj) => {
                                                        return (<>
                                                            <ShopItem numb={numb} id={obj.product_id} image={obj.img1} name={obj.title} price={obj.price} color1="" />
                                                        </>)
                                                    })
                                                }


                                            </div>
                                        </div>
                                    </div>{/* end row */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner />
                <Gallary />
                <Subscribe />
                <Footer />
            </section>
        </>
    );
};
export default Shop;
