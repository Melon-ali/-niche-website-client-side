import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div className="text-center">
            <div>
                <h2>Please Login</h2>
                <div onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</div>
            </div>
            
        </div>
    );
};

export default Login;