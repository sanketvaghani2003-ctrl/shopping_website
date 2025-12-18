import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import Dropdown from 'react-bootstrap/Dropdown';




const Header = () => {

    const navigate = useNavigate();


    function handlesignInclick() {
        navigate('/signIn');
    }

    function handlesignupclick() {
        navigate('/signUp');
    }
    function handleLogout() {
        sessionStorage.clear();
        window.location = "/"
    }

    function handlepagechange() {
        navigate('/shoppingCart');
    }

    function handleMyProfile() {
        navigate('/Profile');
    }

    return (<>

        {/* header */}
        {!sessionStorage.getItem("islogin") && <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="d-flex">
                        <h1 className='logo'>FASCO</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="#">Deals</Link> */}
                                <a href="/#deals" className="nav-link active">Deals</a>

                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="#">New Arrivals</Link> */}
                                <a href="/#newArrivals" className="nav-link active">New Arrivals</a>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" to="#">Packages</Link>
                            </li>

                            <li className="nav-item">
                                <Link onClick={handlesignInclick} className="nav-link active signin" aria-current="page" to="/signIn">Sign In</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <button type='button' onClick={handlesignupclick} className="navbar-signup">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>}

        {sessionStorage.getItem("islogin") && <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="d-flex">
                        <h1 className='logo'>FASCO</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>


                        </ul>
                    </div>
                    <div className='nav-icon '>
                        <div className='icon'>
                            <img src="/navbar/search-icon.svg" className='img-fluid' alt="" />
                        </div>
                        <div className='icon' onClick={handleMyProfile} >
                            <img src="/navbar/man-icon.svg" className='img-fluid' alt="" />
                        </div>
                        <div className='icon'>
                            <img src="/navbar/star-icon.svg" className='img-fluid' alt="" />
                        </div>
                        <div className="icon cart-icon" onClick={handlepagechange}>
                            <img src="/navbar/shop-icon.svg" className="img-fluid" alt="" />
                            <span className="cart-badge">1</span>
                        </div>
                        <div className='icon' onClick={handleLogout}>
                            <img src="/navbar/exit.svg" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>}

    </>)

}
export default Header;