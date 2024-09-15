import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const { data, loading, error } = useFetch("http://localhost:1001/api/auth/getOrders");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      const updatedOrders = data.map((order) => ({
        id: order._id,
        product: order.items.items[0].dish.name,
        quantity: order.items.items[0].quantity,
        price: order.items.items[0].dish.price,
        image: order.items.items[0].dish.images[0],
        acceptable: order.acceptable,
      }));
      setOrders(updatedOrders);
    }
  }, [data, loading]);

  return (
    <OrdersContext.Provider value={{ orders, loading, error }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
