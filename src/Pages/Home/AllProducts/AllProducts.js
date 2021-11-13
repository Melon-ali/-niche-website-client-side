import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './AllProducts.css';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    })
    return (
        <div className="container product-container mt-5">
            {
                allProducts.map(service => <Service
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default AllProducts;