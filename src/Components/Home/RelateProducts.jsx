import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Css/RelateProducts.css";

export default function RelateProducts({ category, currentId }) {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!category) return;
        const fetchRelated = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
                if (!res.ok) throw new Error('Failed to load related products');
                const data = await res.json();
                // exclude current product and limit to 4
                const filtered = data.filter(p => p.id !== currentId).slice(0, 4);
                setItems(filtered);
            } catch (err) {
                console.error(err);
                setItems([]);
            }
        };
        fetchRelated();
    }, [category, currentId]);

    if (!category) return null;

    return (
        <>
            <p className="RelateProducts">Related Products</p>
            <hr className="hrCustomRelateProducts" />

            <div className="RelateProductsParent">
                {items.map(item => (
                    <div key={item.id} className="RelateProducts1" onClick={() => navigate(`/Product/${item.id}`)} style={{ cursor: 'pointer' }}>
                        {item.rating && item.rating.rate > 4 && <button className="badge">Top</button>}
                        <img src={item.image} alt={item.title} className="RelateProductsImg" />
                        <p className="RelateProductsDes">{item.title} <br />
                            <span className="newPrice">Rp {item.price}</span>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
