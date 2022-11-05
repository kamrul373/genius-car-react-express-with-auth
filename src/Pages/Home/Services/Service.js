import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure className='pt-10 px-6 '><img src={img} alt={title} className="rounded-lg" /></figure>
            <div className="card-body" style={{ padding: "24px" }}>
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-regal-orange font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn bg-regal-orange border-none hover:bg-orange-600">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;