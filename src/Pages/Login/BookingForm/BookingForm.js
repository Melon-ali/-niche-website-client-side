import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Container, Spinner } from 'react-bootstrap';
// import { useLocation, useHistory } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import './BookingForm.css';

const BookingForm = () => {
    const { _id } = useParams();
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data => {
            // const bookingForm = data?.find(booking => booking.id === _id)
            // setServices(bookingForm)
            setServices(data[0])
            
        });
    }, []);

    
    console.log(services);


    // const [loginData, setLoginData] = useState({});
    // const {user, loginUser, isLoading, authError} = useAuth();

    // const location = useLocation();
    // const history = useHistory();

    // const handleOnChange = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = {...loginData};
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    // }
    // const handleLoginSubmit = e => {
    //     loginUser(loginData.email, loginData.password, location, history);
    //     e.preventDefault();
    // }
    return (
        <Container >
            <div className="text-center">
                <h2>Please Booking</h2>
                <form /*</div>onSubmit={handleLoginSubmit} */ style={{width: '50%', margin:' auto'}}>
                    <div class="mb-3">
                        <input type="text" class="form-control"
                       /* onBlur={handleOnChange} */
                        aria-describedby="emailHelp"  placeholder="Your Name" defaultValue={services.name}/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control"
                       /* onBlur={handleOnChange} */
                        aria-describedby="emailHelp" placeholder="Your Email" defaultValue={services.price}/>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control"
                       /* onBlur={handleOnChange} */
                        placeholder="Phone Number"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>

                    {/* {isLoading && <Spinner animation="border" variant="info" />}
                    {user?.email && <div class="alert alert-success" role="alert">
                    User Created Successfully!
                    </div>}
                    {authError && <div class="alert alert-danger" role="alert">
                    {authError}
                    </div>} */}
                </form>
            </div>
            
        </Container>
    );
};

export default BookingForm;