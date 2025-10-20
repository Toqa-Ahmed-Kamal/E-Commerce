// // CartContext.js

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        const updatedItems = prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...item, quantity: 1 }];
        localStorage.setItem("cartItems", JSON.stringify(newItems));
        return newItems;
      }
    });
  };

  const getItemQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteFromCart = (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === id);
      let updatedItems;
      if (existingItem && existingItem.quantity > 1) {
        updatedItems = prevItems.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        updatedItems = prevItems.filter((item) => item.id !== id);
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getItemTotalPrice = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.price * item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getItemQuantity,
        removeFromCart,
        deleteFromCart,
        updateQuantity,
        getTotal,
        getItemTotalPrice,
        category,
        setCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
