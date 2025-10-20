import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sekelton from './Components/Sekelton';
import ProductDetails from './Components/Home/ProductDetails';
import Checkout from './Components/Payment/Checkout';
import { CartProvider } from './Components/Home/CartContext';
import { AuthProvider } from './Components/Home/AuthContext';
import { FavoriteProvider } from './Components/Home/FavoriteContext';
import Payment from './Components/Payment/Payment';
import Confirmation from './Components/Payment/Confirmation';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Hello from "./Components/Hello";

import FavoritesPage from './Components/Home/FavoritesPage';

let allRoute = createBrowserRouter([
  {
    path: '',
    element: <Sekelton />,
  children: [
  { index: true, element: <Registration /> },
  { path: 'register', element: <Registration /> },
  { path: 'login', element: <Login /> },
  { path: 'home', element: <Home /> },
  { path: 'Product/:ProductId', element: <ProductDetails /> },
  { path: 'favorites', element: <FavoritesPage /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'payment', element: <Payment /> },
      { path: 'Confirmation', element: <Confirmation /> },
      { path: 'hello', element: <Hello name="Toqa" /> },

    ]
  }
]);

export default function App() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <CartProvider>
          <RouterProvider router={allRoute} />
        </CartProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
}
