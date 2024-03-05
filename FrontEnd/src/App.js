
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
//import men_banner from './Components/Assets/banner_mens.png'
//import women_banner from './Components/Assets/banner_women.png'
// import kid_banner from './Components/Assets/banner_kids.png'
import four_banner from './Components/Assets/4wheeler_banner.jpg'
import two_banner from './Components/Assets/2wheeler_banner.jpg'
import three_banner from './Components/Assets/3wheeler_banner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Category banner={two_banner} category="Two Wheeler" />} />
          <Route path='/womens' element={<Category banner={three_banner} category="Three Wheeler" />} />
          <Route path='/kids' element={<Category banner={four_banner} category="Four_Wheeler" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/vehicle' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
