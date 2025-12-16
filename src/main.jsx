import { createRoot } from 'react-dom/client'
import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './view/Home/Navbar/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './view/Home/Hero/Home';
import Shop from './view/page/shop/Shop';
import SignIn from './view/sign In/SignIn';
import SignUp from './view/signUp/SignUp';
import { Provider } from 'react-redux';
import ProductsDetails from './view/page/productsDetails/ProductsDetails';
import ShoppingCart from './view/page/ShoppingCart/ShoppingCart';
import Checkout from './view/page/checkout/Checkout';
import './css/Animate.css'
import Profile from './view/page/MyOrder/Profile';
import MyOrderDetails from './view/page/myorderdetails/MyOrderDetails';
import About from './view/page/aboutpage/about/About';
import Aboutcontent from './view/page/aboutpage/aboutcontent/aboutcontent';
import Footer from './view/page/aboutpage/footer/Footer';
import Contactpage from './view/page/contactpage/contact/Contact';
import Newsletter from './view/page/aboutpage/newsletter/Newsletter';


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/shopDetails/:pid' element={<ProductsDetails />}></Route>
      <Route path='/signIn' element={<SignIn />}></Route>
      <Route path='/signUp' element={<SignUp />}></Route>
      <Route path='/shoppingCart' element={<ShoppingCart />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/profile' element={< Profile />}></Route>
      <Route path='/myOrderDetials/:oid' element={< MyOrderDetails />}></Route>
      <Route path='/about' element={< About />}></Route>
      <Route path='' element={< Aboutcontent />}></Route>
      <Route path='' element={< Newsletter />}></Route>
      <Route path='' element={< Footer />}></Route>
      <Route path='/contact' element={< Contactpage />}></Route>

    </Routes>
  </BrowserRouter>

)
