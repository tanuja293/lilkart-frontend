import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find((p) => p.id === product.id);
    if (existing)
      setCart(
        cart.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      );
    else setCart([...cart, { ...product, qty: 1 }]);
  };

  const removeFromCart = (id) => setCart(cart.filter((p) => p.id !== id));
  const updateQty = (id, qty) => {
    if (qty <= 0) removeFromCart(id);
    else setCart(cart.map((p) => (p.id === id ? { ...p, qty } : p)));
  };
  const getProductQty = (id) => {
    const item = cart.find((p) => p.id === id);
    return item ? item.qty : 0;
  };
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        getProductQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
