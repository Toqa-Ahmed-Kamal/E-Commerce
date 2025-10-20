import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; 
import Trash from "../../Img/Trash.png";
import EmptyCart2 from "../../Img/EmptyCart2.png"

import "../Css/CartOffCanvas.css";


const CartOffCanvas = ({ isOpen, onClose }) => {
    const { cartItems, updateQuantity, removeFromCart, getTotal, getItemTotalPrice } = useCart(); 
    const navigate = useNavigate(); 

    if (!isOpen) return null;

    return (
        <div className="offcanvas-overlay" onClick={onClose}>
            <div className="offcanvas-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <br /> <br />
                {cartItems.length === 0 ? (
                    <div className='emptyCart text-center'>
                        <img src={EmptyCart2} alt="EmptyCart" className='emptyCartImg'/>
                        <p className='emptyCartText'>No items in the cart</p>
                    </div>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item) => (
                                <React.Fragment key={item.id}>
                                    <li className='allProductInCart'>
                                        <div className='itemsInCart'>
                                            <img src={item.image} alt={item.title} className='imgItem' />
                                            <p className='titleItem'>
                                                {item.title}
                                                <br /> <br />
                                                <span className='titleItemSpan'>{item.quantity} × Rp {item.price.toFixed(2)}0.000</span>
                                            </p>
                                        </div>
                                        <div className='allBtnsInCart'>
                                             <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                                                disabled={item.quantity <= 1} 
                                                className={`MinusBtnInCart ${item.quantity <= 1 ? 'disabledBtn' : ''}`}
                                            >
                                                -
                                            </button>
                                            <span style={{ margin: '0 10px' }} className='quantityBtnInCart'>{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                                                className='plusBtnInCart'
                                            >
                                                +
                                            </button>
                                            <p className='totalItemPrice'>Rp {getItemTotalPrice(item.id).toFixed(2)}0.000</p>
                                            <img 
                                                src={Trash} 
                                                alt="Remove" 
                                                onClick={() => removeFromCart(item.id)} 
                                                className='removeBtnInCart' 
                                            />
                                        </div>
                                    </li>
                                    <hr className='allProductInCartHr' />
                                </React.Fragment>
                            ))}
                        </ul>
                        <p className='SubtotalInCart'>
                            Subtotal
                            <span className='SubtotalInCartSpan'> Rp {getTotal().toFixed(2)}0.00</span>
                        </p>
                        <button 
                            onClick={() => navigate('/checkout')} 
                            disabled={cartItems.length === 0} 
                            className='goToCheckoutBtn'
                        > 
                            Checkout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartOffCanvas;
