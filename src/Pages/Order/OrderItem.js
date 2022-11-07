import React, { useEffect, useState } from 'react';

const OrderItem = ({ order, handleDeleteOrder, handleOrderStatus }) => {
    const { serviceName, price, customer, serviceId, _id, status } = order;
    const [service, setService] = useState();
    useEffect(() => {
        fetch(`https://genius-car-server-opal-iota.vercel.app/services/${serviceId}`)
            .then(response => response.json())
            .then(data => setService(data))
    }, [serviceId]);


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDeleteOrder(_id)} className='btn'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 h-24">
                            <img src={service?.img} alt={serviceName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div>By Genius Car</div>
                    </div>
                </div>
            </td>
            <td>
                {customer.fname} {customer.lname}
                <br />
                <span className="badge badge-ghost badge-sm">Phone : {customer.phone}</span>
            </td>
            <td>{price}</td>
            <th>
                <button onClick={() => handleOrderStatus(_id)} className="btn btn-ghost btn-xs">{status ? <span className='text-green-600'>{status}</span> : "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrderItem;