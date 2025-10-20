import React from 'react';
import { useFavorite } from './FavoriteContext';
import { Link } from 'react-router-dom';
// كان: import './Css/ProductDetails.css'
import '../Css/FavoritesPage.css';


export default function FavoritesPage() {
  const { favorites, removeFromFavorite } = useFavorite();

  return (
    <div className="favorites-page" style={{padding: '40px 0'}}>
      <h2 style={{textAlign: 'center'}}>My Favorites</h2>
      <div className="favorites-list" style={{display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center'}}>
        {favorites.length === 0 ? (
          <p style={{textAlign: 'center'}}>No favorite products yet.</p>
        ) : (
          favorites.map(product => (
            <div key={product.id} className="product-card" style={{width: '320px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '8px', padding: '20px', background: '#fff'}}>
              <Link to={`/Product/${product.id}`}>
                <img src={product.image} alt={product.title} style={{width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px'}} />
                <h3 style={{fontSize: '18px'}}>{product.title}</h3>
              </Link>
              <p style={{color: '#D84727', fontWeight: 'bold'}}>Rp {product.price}0.000</p>
              <button onClick={() => removeFromFavorite(product.id)} style={{marginTop: '10px', background: '#D84727', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', cursor: 'pointer'}}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
