import Love from '../../Img/Love.png';
import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from './CartContext';
import { Link } from "react-router-dom"; 

import "../Css/ThirdCom.css"

export default function ThirdCom() {
    const { addToCart, getItemQuantity, removeFromCart, deleteFromCart } = useCart();
    const [products, setProducts] = useState([]);

    async function getProducts() {
        try {
            let productData = await axios.get("https://fakestoreapi.com/products");
            let filteredProducts = productData.data.filter(
                (product) =>
                    (product.category === "men's clothing" || product.category === "women's clothing") && product.id !== 1
            );
            setProducts(filteredProducts.slice(0, 4));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <p className="latestDeal">Latest Deals</p>
            <hr className="hrCustomlatestDeal" />
            <div className="latestDealParent">
                {products.map((product) => {
                    const quantity = getItemQuantity(product.id); 
                    return (
                        <div className="latestDeal1" key={product.id}>
                            <Link to={`/product/${product.id}`} className="myLink"> 
                                <img src={product.image} alt={product.title} className="latestDealImg" loading="lazy"/>
                             </Link>
                            <p className="latestDealDes">
                                {product.title} <br />
                                <span className="offer">20% Off</span> <br />
                                <span className="oldPrice">Rp 1.500.000</span> <br />
                                <span className="newPrice">Rp {product.price}0.000</span>
                            </p>
                            <div className="LoveAndCart">
                                <img src={Love} alt="Love icon" className="Love" style={{ display: quantity > 0 ? 'none' : 'block' }} loading="lazy"/>
                                {quantity === 0 ? (
                                    <button
                                        type="button"
                                        className="latestDealBtn btn-lg"
                                        onClick={() => addToCart({
                                            id: product.id,
                                            title: product.title,
                                            price: product.price,
                                            image: product.image
                                        })} 
                                    >
                                        Add to cart
                                    </button>
                                ) : (
                                    <div className="cart-parent">
                                        <div className="cartBtn">
                                            <button onClick={() => deleteFromCart(product.id)} className='latestDealBtnminus'>-</button>
                                            <span className='latestDealBtnQuantity'>{quantity}</span> 
                                            <button onClick={() => addToCart({
                                                id: product.id,
                                                title: product.title,
                                                price: product.price,
                                                image: product.image
                                            })} className='latestDealBtnPlus'>+</button> 
                                        </div>
                                        <button className="latestDealBtnRemove" onClick={() => removeFromCart(product.id)}>
                                            Remove
                                        </button>
                                    </div>
                                    
                                )}
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    );
}
