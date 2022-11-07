import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    const navigate = useNavigate()
    const { title, price, _id } = details;
    // const [customerInfo, setCustomerInfo] = useState({});

    // const handleOnChange = (e) => {
    //     const fieldName = e.target.name;
    //     customerInfo[fieldName] = e.target.value;
    //     console.log(customerInfo);
    // }

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const addr = form.address.value;
        const orderInfo = {
            serviceId: _id,
            serviceName: title,
            price: price,
            customer: {
                fname, lname, email, phone, addr
            }
        }
        fetch("https://genius-car-server-opal-iota.vercel.app/order/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorizationToken: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(orderInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("Order has been placed successfully");
                navigate("/");
            })
        console.log("After submit ", orderInfo)
    }
    return (
        <div className='my-8'>
            <div className='py-3 text-center'>
                <h2 className='text-4xl font-semibold my-3'>Checkout</h2>
                <h1 className='text-3xl'>You are going to buy <span className='font-bold'>{title}</span> service</h1>
                <h3 className='text-regal-orange text-2xl italic mt-3'>Service Charge : {price} </h3>
            </div>
            <form onSubmit={handleOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4'>
                    <input name='fname' type="text" placeholder="First Name" className="input input-bordered w-full" defaultValue={user?.displayName} />
                    <input name='lname' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                    <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-10">
                    <textarea name='address' className="textarea textarea-bordered h-24" placeholder="Address"></textarea>
                </div>
                <div className='text-center mt-3'>
                    <input type="submit" value="Place Order" className='btn' />
                </div>
            </form>
        </div>
    );
};

export default Checkout;