import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("orders") || "[]")
      : []
  );

  const placeOrder = (cartItems) => {
    const newOrder = { id: Date.now(), items: cartItems };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    if (typeof window !== "undefined")
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
