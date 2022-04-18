import React from "react";
import "../css/SignUp.css";
import { Link} from 'react-router-dom';

function SignUp() {

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
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="submitBtn">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered? <a href="/login">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
        );
}

export default SignUp;