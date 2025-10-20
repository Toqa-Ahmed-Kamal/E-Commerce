
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCart from '../../Img/add-cart.png';
import Page1 from '../../Img/Page1.png';
import RelateProducts from "./RelateProducts";
import { useCart } from "./CartContext"; 
import { useFavorite } from "./FavoriteContext";
import Love from '../../Img/Love.png';
// كان: import '../../Css/ProductDetails.css'
import '../Css/ProductDetails.css';

export default function ProductDetails() {
    const { addToFavorite, removeFromFavorite, isFavorite } = useFavorite();
    const apiUrl = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`${apiUrl}/${params.ProductId}`)
            .then((res) => res.json())
            .then((product) => {
                setProduct(product);
                const savedQuantity = localStorage.getItem(`quantity_${product.id}`); 
                if (savedQuantity) {
                    setQuantity(Number(savedQuantity)); 
                }
            });
    }, [params.ProductId]);

    // ensure page is scrolled to top when opening a product detail
    useEffect(() => {
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
            // fallback
            window.scrollTo(0, 0);
        }
    }, [params.ProductId]);

    const [activeTab, setActiveTab] = useState('Details');
    const [quantity, setQuantity] = useState(1); 
    const [showQuantityControls, setShowQuantityControls] = useState(false); 
    const { addToCart, removeFromCart } = useCart(); 

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleAddToCart = () => {
        const item = { ...product, quantity }; 
        addToCart(item);
        localStorage.setItem(`quantity_${product.id}`, quantity); 
        setShowQuantityControls(true); 
    };

    const handleIncrease = () => {
        setQuantity((prevQty) => {
            const newQty = prevQty + 1;
            localStorage.setItem(`quantity_${product.id}`, newQty); 
            return newQty; 
        });
        addToCart({ ...product, quantity: quantity + 1 });
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQty) => {
                const newQty = prevQty - 1;
                localStorage.setItem(`quantity_${product.id}`, newQty); 
                return newQty; 
            });
            removeFromCart(product.id); 
            addToCart({ ...product, quantity: quantity - 1 }); 
        }
    };

    const handleFavorite = () => {
        if (isFavorite(product.id)) {
            removeFromFavorite(product.id);
        } else {
            addToFavorite(product);
        }
    };

    return (
        <>
            <p className="theHead">
                Home / Product / {product.category} / <span className="theHeadSpan">{product.title}</span>
            </p>
            <div className="product-card">
                <div className="product-image">
                    <img src={product.image} alt={product.title} className="imgDetails" />
                </div>
                <div className="product-details">
                    <h2 className="productTitle">{product.title}</h2>
                    <p className="productoldPrice">Rp 1.208.000</p>
                    <p className="productPrice">Rp {product.price}0.000</p>
                    
                    <div className="firstBtns2">
                        {showQuantityControls && (
                            <div className="quantity-controls">
                                <button onClick={handleDecrease} disabled={quantity <= 1} className={`MinusBtn ${quantity <= 1 ? 'disabledBtn' : ''}`}>-</button>
                                <span className='quantityBtn'>{quantity}</span>
                                <button onClick={handleIncrease} className="plusBtn">+</button>
                            </div>
                        )}

                        <button type="button" className="btn3 btn-lg" onClick={handleAddToCart}>
                            <img src={AddCart} alt="" className="imgbtn" />Add to cart
                        </button>
                        <button type="button" className="btn-fav" onClick={handleFavorite} style={{marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer', position: 'relative'}}>
                            <img src={Love} alt="Favorite" style={{width: '32px', filter: isFavorite(product.id) ? 'drop-shadow(0 0 4px #D84727)' : 'grayscale(1)'}} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="tabs">
                    <button
                        className={activeTab === 'Details' ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick('Details')}
                    >
                        Details
                    </button>
                    <button
                        className={activeTab === 'Warranty' ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick('Warranty')}
                    >
                        Warranty
                    </button>
                    <button
                        className={activeTab === 'Custom Engrave' ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick('Custom Engrave')}
                    >
                        Custom Engrave
                    </button>
                    <button
                        className={activeTab === 'How to Adjust' ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick('How to Adjust')}
                    >
                        How to Adjust
                    </button>
                    <button
                        className={activeTab === 'How to Care' ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick('How to Care')}
                    >
                        How to Care
                    </button>
                    <button
                        className={activeTab === 'Gallery' ? 'tab active' : 'tab'}
                        onClick={() => handleTabClick('Gallery')}
                    >
                        Gallery
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'Details' && (
                        <div>
                            <p className="tabContentTitle">Description</p>
                            <p>{product.description}</p>
                            <p className="tabContentDetails">
                                <span className="tabContentTitle">Rating</span><br />
                                <br />{product.rating ? product.rating.rate : "N/A"}
                                ({product.rating ? product.rating.count : 0} reviews)
                            </p>
                            <p className="tabContentTitle">Category</p>
                            <p className="tabContentDetails">{product.category}</p>
                        </div>
                    )}
                    {activeTab === 'Warranty' && (
                        <div>
                            <p className="tabContentDetails">This product comes with a 1-year warranty.</p>
                        </div>
                    )}
                    {activeTab === 'Custom Engrave' && (
                        <div>
                            <p className="tabContentDetails">You can customize the engraving on this product.</p>
                        </div>
                    )}
                    {activeTab === 'How to Adjust' && (
                        <div>
                            <p className="tabContentDetails">Instructions for adjusting the product can be found here.</p>
                        </div>
                    )}
                    {activeTab === 'How to Care' && (
                        <div>
                            <p className="tabContentDetails">Care instructions for maintaining the product.</p>
                        </div>
                    )}
                    {activeTab === 'Gallery' && (
                        <div>
                            <p className="tabContentDetails">Gallery of images related to the product.</p>
                        </div>
                    )}
                </div>
            </div>
            <RelateProducts category={product.category} currentId={product.id} />
        </>
    );
}
