import { useNavigate } from 'react-router-dom';
import './footer.css'


const Footer = () => {
    const navigate = useNavigate();

    function handleshopChange() {
        navigate("/shop");
    }
    function handleChange(){
        navigate("");
    }

    return (<>

        <section className='footer-section'>
            <div className='footer-container'>


                <div className='shopping-part d-flex'>
                    <div className='shopping  justify-content-center '>
                        <img src="/img/shopping.png" onClick={handleshopChange} className='shop-icon  w-100 img-fulid' alt="shop icon" />
                    </div>

                    <div className='uparrow-part  justify-content-center '>
                        <img src="/img/uparrow.png" onClick={handleChange} className=" uparrow img-fulid back-to-top-icon" alt="up arrow icon" />
                    </div>
                </div>


                <div className='footer-details d-flex '>
                    <div className='footer-name'>
                        FASCO
                    </div>

                    <div className='footer-menu text-center'>
                        <div className='footer_menu-item support-center '>Support Center</div>
                        <div className='footer_menu-item'>Invoicing</div>
                        <div className='footer_menu-item'>Contract</div>
                        <div className='footer_menu-item'>Careers </div>
                        <div className='footer_menu-item'>Blog</div>
                        <div className='footer_menu-item'>FAQ,s</div>
                    </div>

                </div>
                <div className='copyright text-center'>Copyright © 2022 Xpro . All Rights Reseved.</div>
            </div>
        </section>

    </>)
}
export default Footer;