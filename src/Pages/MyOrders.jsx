import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useAuth from "../Hooks/UseAuth";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import { Link } from "react-router";

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

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("My Orders List", 14, 15);
    const tableColumn = [
      "SL. No",
      "Product",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = [];

    orders.map((order, index) => {
      const rowData = [
        index + 1,
        order.productName,
        order.buyerName,
        order.price,
        order.quantity,
        order.address,
        order.date,
        order.phone,
      ];
      tableRows.push(rowData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
    });

    doc.save("my_orders.pdf");
  };

  return (
    <div>
      <title>My-Orders</title>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen mt-10 w-11/12 mx-auto">
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
            {orders.length > 0 ? (
              <button
                onClick={handleDownload}
                className="px-7 py-1.5 rounded-lg cursor-pointer text-lg bg-black text-white hover:bg-[#59AC77] "
              >
                Download PDF
              </button>
            ) : (
              <Link to="/petsSupplies">
                <button
                  className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
                  type="button"
                >
                  <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-[184px] z-10 duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      height="25px"
                      width="25px"
                    >
                      <path
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        fill="#000000"
                      ></path>
                      <path
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        fill="#000000"
                      ></path>
                    </svg>
                  </div>
                  <p className="translate-x-2">Order Now</p>
                </button>
              </Link>
            )}
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
