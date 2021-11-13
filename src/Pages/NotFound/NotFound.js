import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not">
            <img src="https://i.ibb.co/CM6wS3r/NotFound.jpg" alt="" />
            <div>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;