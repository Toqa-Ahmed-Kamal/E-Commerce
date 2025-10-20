import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/FifthCom.css";
import { useCart } from './CartContext'; 

export default function FifthCom() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("allClothing");
  const { setCategory } = useCart();

  async function getProducts() {
    try {
      let productData = await axios.get("https://fakestoreapi.com/products");
      setProducts(productData.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (product.id === 1) return false; 
    if (activeCategory === "allClothing") {
      return (
        product.category === "men's clothing" || product.category === "women's clothing"
      );
    } else if (activeCategory === "electronics") {
      return product.category === "electronics";
    } else if (activeCategory === "jewelery") {
      return product.category === "jewelery";
    }
    return false;
  });

  const categories = [
    { label: "Men's & Women's Clothing", value: "allClothing" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" }
  ];

  const handleChangeCategory = (category) => {
    setActiveCategory(category.value);
    setCategory(category.value); 
  };

  return (
    <>
      <div className="category-tabs">
        {categories.map((category) => (
          <div key={category.value} className="category-item">
            <button
              onClick={() => handleChangeCategory(category)} 
              className={activeCategory === category.value ? "active-tab" : "tab"}
            >
              {category.label}
            </button>
            <hr className="categoryTabsCustomHr" />
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-4 mb-3 mx-3" key={product.id}>
              <Link to={`/product/${product.id}`} className="myLink">
                <div className="card">
                  <div className="card-image">
                    <img
                      loading="lazy"
                      className="card-img-left"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-price">Rp {product.price}0.000</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="CardBtn">
        <hr className="line" />
        <button type="button" className="RecentNewsBtn2 btn-outline">
          See More
        </button>
        <hr className="line" />
      </div>
    </>
  );
}
