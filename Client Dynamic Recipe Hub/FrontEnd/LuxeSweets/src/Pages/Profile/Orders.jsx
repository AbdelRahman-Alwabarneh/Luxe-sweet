import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "./Sidebar";
import { useOrders } from "../../Context/OrdersContext";

const Orders = () => {
  const { orders, loading, error } = useOrders();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading orders: {error.message}</p>;

  return (
    <>
    <Header />

    <div className="lex min-h-screen bg-[#F5F3F0] flex">
        
      <Sidebar className="w-1/4 mr-6" />
      
      <div className="w-3/4 mt-6 ml-10 overflow-hidden bg-white rounded-lg shadow-md">
      
        <div className="overflow-x-auto"> {/* إضافة overflow-x-auto هنا */}
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-[#A0785D] text-white uppercase text-sm leading-normal">
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-center">Image</th>
                <th className="px-6 py-3 text-center">Quantity</th>
                <th className="px-6 py-3 text-center">Price</th>
                <th className="px-6 py-3 text-center">Total</th>
                <th className="px-6 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-3 text-left whitespace-nowrap">
                    <div className="text-lg font-bold text-gray-800">{order.product}</div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <img
                      src={order.image}
                      alt={order.product}
                      className="object-cover w-16 h-16 mx-auto rounded-md"
                    />
                  </td>
                  <td className="px-6 py-3 font-bold text-center">{order.quantity}</td>
                  <td className="px-6 py-3 font-bold text-center">${order.price.toFixed(2)}</td>
                  <td className="px-6 py-3 font-bold text-center">
                    ${(order.quantity * order.price).toFixed(2)}
                  </td>
                  <td className="px-6 py-3 font-bold text-center">
                    {order.acceptable ? (
                      <div className="text-green-500">Ready</div>
                    ) : (
                      <div className="text-red-500">Pending</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </>
  
  );
};

export default Orders;
