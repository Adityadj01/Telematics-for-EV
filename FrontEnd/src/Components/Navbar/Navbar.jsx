import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => { setMenu("shop") }} className="nav-logo">
        <img src={logo} alt="" />
        <p>EV Diagnose</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Home</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("2wheeler") }}><Link to='/2wheeler'>2 Wheeler</Link>{menu === "2wheeler" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("3wheeler") }}><Link to="3wheeler">3 Wheeler</Link>{menu === "3wheeler" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("4wheeler") }}><Link to='4wheeler'>4 Wheeler</Link>{menu === "4wheeler" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-vehicle">
      {localStorage.getItem('auth-token')
        ?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>
        }
        <Link to='/Profile'>
          {/* <img src={cart_icon} alt="" /> */}
          <button>Profile</button>
        </Link>
        <div className="nav-vehicle-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
