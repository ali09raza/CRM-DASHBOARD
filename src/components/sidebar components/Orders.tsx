import React from "react";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../../utils";
import { ordersData } from "../../data/ordersData";
const Orders = () => {
  return (
    <div className="bg-white px-4 pt-3  rounded-sm border  border-gray-200 flex-1 h-[35rem] overflow-y-auto ">
      <strong className="text-gray-700 font medium">Recent Orders</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead className="bg-blue-800 text-white">
            <tr>
              <td>ID</td>
              <td>Product ID</td>
              <td>Customer Name</td>
              <td>Order Date</td>
              <td>Order Total</td>
              <td>Shipping Address</td>
              <td>Order Status</td>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id} className="border-b-2 border-gray-200">
                <td className="text-blue-500">
                  #<Link to={`/order/${order.id}`}>{order.id}</Link>
                </td>
                <td className="text-blue-500">
                  <Link to={`/product/${order.product_id}`}>
                    {order.product_id}
                  </Link>
                </td>
                <td className="text-blue-500">
                  <Link to={`/customer_name/${order.customer_name}`}>
                    {order.customer_name}
                  </Link>
                </td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
