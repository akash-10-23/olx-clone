import { React, useState } from "react";
import "../css/SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import  Axios  from "axios";

function SignUp() {
    const navigate = useNavigate();
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
    const register = async (e) => {
        e.preventDefault();
        
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:8080/register",
        }).then((res) => {
            console.log(res);
            if (res.data === "User Already Exists")
                alert("User Already Exists");
            else {
                alert(res.data);
                navigate("/login");
            }
                
        });
        
    };

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
                <form method="POST" className="signUpForm" onSubmit={register}>
                    <h3>Sign Up</h3>
                    
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email" 
                            // name="email"
                            value={registerUsername}
                            onChange={e => setRegisterUsername( e.target.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            // name="password"
                            value={registerPassword}
                            onChange={e => setRegisterPassword( e.target.value)}
                        />
                    </div>
                    <button className="submitBtn">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered? <a href="/login">Sign in</a>
                    </p>
                    <p className="policy">
                        By signing-in you agree to the OLX FAKE CLONE Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                </form>
            </div>
        </div>
        );
}

export default SignUp;