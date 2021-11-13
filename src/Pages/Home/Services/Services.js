import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setServices(data.slice(0, 6)))
    })
    return (
        <div className="container service-container mt-5">
            {
                services.map(service => <Service
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;