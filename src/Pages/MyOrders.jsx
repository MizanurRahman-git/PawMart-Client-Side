import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useAuth from "../Hooks/UseAuth";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const MyOrders = () => {
  const { users } = useAuth();
  const [orders, setOrders] = useState([]);
  const printRef = React.useRef(null);

  useEffect(() => {
    fetch(
      `https://pawmart-store-server.vercel.app/myOrders?email=${users?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [users]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pawmart-store-server.vercel.app/myOrders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount == 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              window.location.reload();
            }
          });
      }
    });
  };


  return (
    <div>
      <title>My-Orders</title>
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen mt-10">
          <div ref={printRef}>
            <div className="flex justify-center underline">
              <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Total Order: {orders.length}
              </h1>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="table">
                {/* head */}
                <thead className="bg-linear-to-r from-cyan-500 to-blue-500">
                  <tr>
                    <th>SL. No</th>
                    <th>Product</th>
                    <th>Buyer Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Phone</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-200 text-black">
                  {/* row 1 */}
                  {orders.map((order, index) => (
                    <tr key={order._id}>
                      <th>{index + 1}</th>
                      <th>{order.productName}</th>
                      <td>{order.buyerName}</td>
                      <td>{order.price}</td>
                      <td>{order.quantity}</td>
                      <td>{order.address}</td>
                      <td>{order.date}</td>
                      <td>{order.phone}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="cursor-pointer"
                        >
                          <MdDelete className="w-6 h-6" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="px-7 py-1.5 rounded-lg border "
            >
              Download PDF
            </button>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyOrders;
