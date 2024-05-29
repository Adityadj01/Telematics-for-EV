import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import nav_dropdown from '../../assets/nav_dropdown.png'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import {UserContextConsumer} from "../../Context/UserContext.tsx";
import {getNumberOfItemsInCart} from "../../Services/ProductService.tsx";

export const NavBar = () => {

    const [menu, setMenu] = useState("shop");
    const [noOfItemsInCart, setNoOfItemsInCart] = useState(0);
    const menuRef = useRef(null);

    const dropdown_toggle = (e: unknown) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        menuRef.current.classList.toggle('nav-menu-visible');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        e.target.classList.toggle('open');
    }

    useEffect(() => {
        setNoOfItemsInCart(getNumberOfItemsInCart())
    }, []);

    return (
        <UserContextConsumer>
            {user => <div className='navbar'>
                <Link to='/' onClick={() => {
                    setMenu("shop")
                }} className="nav-logo">
                    <img src={logo} alt=""/>
                    <p>EV Diagnose</p>
                </Link>
                <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt=""/>
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={() => {
                        setMenu("shop")
                    }}><Link to='/' className={menu === "shop" ? 'active' : ''}>Home</Link></li>
                    <li onClick={() => {
                        setMenu("2wheeler")
                    }}><Link to='/2wheeler' className={menu === "2wheeler" ? 'active' : ''}>2 Wheeler</Link></li>
                    <li onClick={() => {
                        setMenu("3wheeler")
                    }}><Link to="3wheeler" className={menu === "3wheeler" ? 'active' : ''}>3 Wheeler</Link></li>
                    <li onClick={() => {
                        setMenu("4wheeler")
                    }}><Link to='4wheeler' className={menu === "4wheeler" ? 'active' : ''}>4 Wheeler</Link></li>
                </ul>
                <div className="nav-login-vehicle">
                    {user ?
                        <>
                            <Link to='/Profile/dashboard'>
                                <button><i className="fa-regular fa-user pe-2"></i>Profile</button>
                            </Link>
                            <div className="nav-vehicle-count">{noOfItemsInCart}</div>
                        </>
                        : null}
                    {user
                        ? <button onClick={() => {
                            localStorage.removeItem('token');
                            window.location.replace("/")
                        }}><i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>Logout</button>
                        : <Link to='/login'>
                            <button><i className="fa-solid fa-right-to-bracket pe-2"></i>Login</button>
                        </Link>
                    }
                </div>
            </div>}

        </UserContextConsumer>
    );
};
