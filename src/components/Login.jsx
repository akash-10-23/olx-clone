import React from "react";
import "../css/SignUp.css";
import { Link} from 'react-router-dom';

function Login(){

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
            <Link to="/">
                <img
                    className='loginLogo'
                    src='https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png'
                    alt='logo'
                />
            </Link>
            <form className="signUpForm">
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
                <button type="submit" className="submitBtn">Submit</button>
                <p className="forgot-password text-right">
                        New User? <a href="/signup">Register</a>
                </p>
            </form>
            </div>
        </div>
    );
}

export default Login;