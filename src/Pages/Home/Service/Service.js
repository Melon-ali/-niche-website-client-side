import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id, name, description, img, price} = props.service;
    return (
        <div>
            <div className="">
                <div className="card service">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title" style={{color: 'gray'}}>{name}</h1>
                        <p className="card-text px-2">{description}</p>
                        <div className="d-flex bd-highlight">
                            <div className=" flex-grow-1 bd-highlight">
                                <Link to={`/details/${_id}`}>
                                    <button className="btn">VIEW DETAILS</button>
                                </Link>
                            </div>
                            <div className=" flex-grow-1 bd-highlight"><h3 style={{color: 'gray'}}>Price: $ {[price]}</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;