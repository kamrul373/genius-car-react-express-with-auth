import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const data = {
        subTitle: "Services",
        title: "Our Service Area",
    }
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='py-20'>
            <Title data={data}></Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='text-center mt-12'>
                <button className="btn btn-outline outline outline-regal-orange hover:bg-regal-orange border-none text-regal-orange">More Services</button>
            </div>
        </div>
    );
};

export default Services;