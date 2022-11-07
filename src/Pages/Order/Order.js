import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import OrderItem from './OrderItem';

const Order = () => {
    const { user, logout } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`, {
            headers: {
                authorizationToken: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                if (response.status === 401 || response.status === 402 || response.status === 403) {
                    return logout;
                }
                return response.json()
            })
            .then(ord => setOrders(ord))
    }, [user?.email, logout]);

    const handleDeleteOrder = (id) => {
        console.log(id);
        const confirm = window.confirm("Are you sure you want to cancel order ?")
        if (confirm) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: "DELETE",
                headers: {
                    authorizationToken: `Bearer ${localStorage.getItem("token")}`
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders);
                    }

                })
                .catch(error => console.log(error))
        }

    }
    const handleOrderStatus = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorizationToken: `Bearer ${localStorage.getItem("token")}`

            },
            body: JSON.stringify({ status: "Approved" })

        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remainingOrders = orders.filter(order => order._id !== id)
                    const approvedOrder = orders.find(order => order._id === id);
                    approvedOrder.status = "Approved";
                    const updatedOrders = [approvedOrder, ...remainingOrders];
                    setOrders(updatedOrders);
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Service Name</th>
                        <th>Customer</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderItem
                            key={order._id}
                            order={order}
                            handleDeleteOrder={handleDeleteOrder}
                            handleOrderStatus={handleOrderStatus}
                        ></OrderItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Order;