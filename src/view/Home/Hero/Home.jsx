import Footer from '../../footer/Fotter';
import Banner from '../banner/Banner';
import Customer from '../customers/Customer';
import Deals from '../deal/Deals';
import Gallary from '../Follow/Gallary';
import LogoSlider from '../LogoSlider/LogoSlider';
import NewArrivals from '../NewArrivals/NewArrivals';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();


    function handleclick() {
         navigate("/shop");
    }

    return (<>

        <div className='hero-section' >

            <div className='container'>
                <div className='banner'>
                    <div className="row">
                        <div className="col-12 col-lg-4 ">
                            <div className='model-part d-flex '>
                                <img src="/img/hero-img-1.png" className='model w-100 object-cover  img-fluid' alt="person with cloth" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ">
                            <div className='model-two d-flex '>
                                <img src="/public/img/hero-img-2.png" className='img-fluid' alt="top model" />
                            </div>

                            <div className='title text-center'>ULTIMATE</div>

                            <h3 className='sale text-center'>SALE</h3>
                            <p className="subtitle">NEW COLLECTION</p>
                            <button type="submit" onClick={handleclick} className='shop-btn d-flex'>SHOP NOW</button>
                            <div className='model-three  d-flex '>
                                <img src="/public/img/hero-img-3.png" className='img-fluid' alt="top model" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 ">
                            <div className='model-part d-flex '>
                                <img src="/public/img/hero-img-4.png" className='model1 img-fluid ' alt="person with cloth" />
                            </div>
                        </div>


                    </div>  {/* end row */}


                </div>
            </div>
        </div>

        <LogoSlider />
        <Deals />
        <NewArrivals />
        <Banner />
        <Gallary />
        <Customer />
        <Subscribe />
        <Footer />





    </>)
}
export default Home;