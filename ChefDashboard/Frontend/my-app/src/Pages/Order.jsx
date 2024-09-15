import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ChefContext } from '../contexts/ChefContext'; 

function Order() {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chefId, setChefId] = useState(null);
  const [filter, setFilter] = useState("all"); // "all", "ready", "pending"
  const [totalProfit, setTotalProfit] = useState(0);
  const {setChefProfit} = useContext(ChefContext);

  useEffect(() => {
    // Retrieve chefId from session storage
    const storedChefId = sessionStorage.getItem("chefId");
    if (storedChefId) {
      setChefId(storedChefId);
    } else {
      setError("Chef ID not found in session storage.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!chefId) return;

    const fetchPayments = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/order/getAllPayments/${chefId}`);
        setPayments(response.data.payments);
        setFilteredPayments(response.data.payments); // Initialize filteredPayments
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payments:", error);
        setError("Failed to fetch payments.");
        setLoading(false);
      }
    };

    fetchPayments();
  }, [chefId]);

  useEffect(() => {
    // Apply filter
    if (filter === "all") {
      setFilteredPayments(payments);
    } else if (filter === "ready") {
      setFilteredPayments(payments.filter(payment => payment.acceptable));
    } else if (filter === "pending") {
      setFilteredPayments(payments.filter(payment => !payment.acceptable));
    }
  }, [filter, payments]);

  useEffect(() => {
    // Calculate total profit
    const calculateTotalProfit = () => {
      const profit = payments.reduce((total, payment) => {
        return total + (payment.items.total * 0.90); // 10% of the total price
      }, 0);
      setTotalProfit(profit);
      setChefProfit(profit);
    };

    calculateTotalProfit();
  }, [payments]);

  const handleToggleAcceptable = async (paymentId, currentStatus) => {
    try {
      const updatedStatus = !currentStatus;
      const response = await axios.put(`http://localhost:3000/api/order/updateAcceptable/${paymentId}`, {
        acceptable: updatedStatus,
      });

      if (response.data.success) {
        // Update local state with the new status
        setPayments((prevPayments) =>
          prevPayments.map((payment) =>
            payment._id === paymentId
              ? { ...payment, acceptable: updatedStatus }
              : payment
          )
        );
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      setError("Failed to update payment status.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex min-h-screen text-[#b0956e]">
      {/* Sidebar */}
      <div className="w-1/4 bg-white ">
        {/* Sidebar content here */}
      </div>

      {/* Order Content */}
      <div className="w-3/4 px-20 mt-24">
        <h1 className="mb-8 text-3xl font-bold text-center text-[#b0956e]">Orders</h1>

        {/* Filter Buttons */}
        <div className="mb-4 text-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 mx-2 rounded ${filter === "all" ? "bg-[#b0956e] text-white" : "bg-gray-200"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("ready")}
            className={`px-4 py-2 mx-2 rounded ${filter === "ready" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          >
            Ready
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 mx-2 rounded ${filter === "pending" ? "bg-red-500 text-white" : "bg-gray-200"}`}
          >
            Pending
          </button>
        </div>

        <div className="mb-4 text-center">
          <p className="text-xl font-bold">Total Chef Profit (90%): ${totalProfit.toFixed(2)}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 my-20 lg:grid-cols-2">
          {filteredPayments.length === 0 ? (
            <p className="text-center text-gray-500">No orders found for this chef.</p>
          ) : (
            filteredPayments.map((payment) => {
              // Calculate chef profit
              const chefProfit = payment.items.total * 0.90;

              return (
                <div key={payment._id} className="overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">User: {payment.fullName}</div>
                    <div className="mb-2 text-sm text-gray-500">Email: {payment.email}</div>
                    <div className="mb-2 text-sm text-gray-500">Stripe Payment ID: {payment.stripePaymentId}</div>

                    {/* Dish Items */}
                    <div className="mb-4">
                      {payment.items.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between pb-2 mb-2 border-b">
                          <div className="flex items-center">
                            <img
                              src={item.dish.images[0]}
                              alt={item.dish.name}
                              className="object-cover w-16 h-16 mr-4 rounded-md"
                            />
                            <div>
                              <p className="font-semibold text-gray-700">{item.dish.name}</p>
                              <p className="text-sm text-gray-500">Price: ${item.dish.price.toFixed(2)}</p>
                              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                          </div>
                          <p className="text-gray-900">${(item.dish.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>

                    {/* Total Price */}
                    <div className="flex items-center justify-between text-xl font-bold text-gray-900">
                      <p>Total Price:</p>
                      <p>${payment.items.total.toFixed(2)}</p>
                    </div>

                    {/* Chef Profit */}
                    <div className="flex items-center justify-between mt-2 text-xl font-bold text-gray-900">
                      <p>Chef Profit (90%):</p>
                      <p>${chefProfit.toFixed(2)}</p>
                    </div>

                    {/* Order Status */}
                    <div className="mt-4">
                      <p className="text-sm font-bold text-gray-700">Status:</p>
                      <span
                        onClick={() => handleToggleAcceptable(payment._id, payment.acceptable)}
                        className={`inline-block px-3 py-1 rounded-full cursor-pointer ${
                          payment.acceptable
                            ? "text-white bg-green-300"
                            : "text-red-800 bg-red-300"
                        }`}
                      >
                {payment.acceptable ? 'Ready' : 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
