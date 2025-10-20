import { Link } from "react-router-dom";
import Image5 from "../../Img/Image5.png";
import Search from '../../Img/Search.png';
import User from '../../Img/User.png';
import Cart from '../../Img/Cart.png';
import Love from '../../Img/Love.png';
import { useFavorite } from '../Home/FavoriteContext';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '../Home/AuthContext.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import CartOffCanvas from "../Home/CartOffCanvas"; 
import { useCart } from "../Home/CartContext"; 
import "../Css/NavBar.css"

export default function NavBar() {
    const { favorites } = useFavorite();
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useCart();
    const { user, logout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePath = location.pathname === '/home' || location.pathname === '/';
    const navRef = useRef(null);
    const [spacerHeight, setSpacerHeight] = useState(0);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/categories");
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const menuRef = useRef(null);

    const handleUserClick = (e) => {
        e.stopPropagation();
        setShowMenu((prev) => !prev);
    };

    useEffect(() => {
        const onDocClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };
        const onKey = (e) => {
            if (e.key === 'Escape') setShowMenu(false);
        };
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('click', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, []);

    useEffect(() => {
        const updateHeight = () => {
            if (navRef.current && isHomePath) {
                setSpacerHeight(navRef.current.offsetHeight || 70);
            } else {
                setSpacerHeight(0);
            }
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [isHomePath]);

    const handleLogout = () => {
        logout();
        setShowMenu(false);
        navigate('/login');
    };

    return (
        <>
        <nav ref={navRef} className={`navbar navbar-expand-lg ${isHomePath ? 'sticky' : ''}`}>
            <div className="container-fluid">
                <Link to="/home"><img className="navbar-brand" src={Image5} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {categories.map((category, index) => (
                            <button key={index} className="nav-link category-btn" type="button" onClick={() => {
                                window.dispatchEvent(new CustomEvent('scrollToFifth', { detail: { category } }));
                            }}>{category}</button>
                        ))}
                    </div>
                 
                    {user ? (
  <div
    ref={menuRef}
    className="user-menu"
    style={{ position: 'relative', display: 'inline-block' }}
  >
    <button
      type="button"
      className="username"
      onClick={handleUserClick}
      aria-haspopup="menu"
      aria-expanded={showMenu}
      aria-controls="user-dropdown"
    >
      <img src={User} alt="user icon" className="user-icon" />
      <span className="username-text">{user}</span>
      <span className="chev" aria-hidden="true">▾</span>
    </button>

  {showMenu && (
  <div id="user-dropdown" className="user-dropdown" role="menu" onClick={(e)=>e.stopPropagation()}>
    <button type="button" className="logout-btn" role="menuitem" onClick={handleLogout}>
      Logout
    </button>
  </div>
)}


  </div>
) : (
  <Link className="Login" to="/login"><img src={User} alt="User Log in" />Log In</Link>
)}


               
                    <div className="icon-container" onClick={handleToggle}>
                        <img id="icon" src={Cart} alt="Cart" style={{ cursor: 'pointer' }} />
                        <div className="notification-badge rounded-circle d-flex justify-content-center align-items-center">
                            {cartItems.length}
                        </div>
                    </div>
                    <div className="icon-container" style={{marginLeft: '10px', background: '#fff'}} onClick={() => navigate('/favorites')}>
                        <img id="icon" src={Love} alt="Favorites" style={{ cursor: 'pointer', filter: favorites.length ? 'drop-shadow(0 0 4px #D84727)' : 'grayscale(1)' }} />
                        <div className="notification-badge rounded-circle d-flex justify-content-center align-items-center" style={{background: '#D84727'}}>
                            {favorites.length}
                        </div>
                    </div>
                </div>
            </div>
            <CartOffCanvas isOpen={isOpen} onClose={handleToggle} />
        </nav>

        {isHomePath && <div style={{ height: spacerHeight }} aria-hidden="true" />}
        </>
    );
}
