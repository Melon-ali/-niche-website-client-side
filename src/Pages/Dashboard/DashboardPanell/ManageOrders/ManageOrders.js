import React, { useEffect, useState } from 'react';
import Order from '../../../Order/Order';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allorder`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return (
        <div className="service-container mt-5">
            {
                orders.map(order => <Order
                    order={order}
                ></Order>)
            }
        </div>
    );
};

export default ManageOrders;