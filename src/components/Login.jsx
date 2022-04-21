import {React,useState} from "react";
import "../css/SignUp.css";
import { Link ,useNavigate} from 'react-router-dom';
import Axios  from "axios";
import { useStateValue } from "../StateProvider";

function Login(){
    const navigate = useNavigate();
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [{ items,username },dispatch] = useStateValue();
    
    const login = async (e) => {
        e.preventDefault();

        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:8080/login",
        }).then((res) => {
            console.log(res);
            
            if (res.data === "No User Exists")
                alert(res.data);
            else {
                dispatch({
                    type: "SET_USER",
                    username: res.data
                });
                navigate("/");
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
            <form method="POST" className="signUpForm" onSubmit={login}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email" 
                            // name="email"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                </div>

                <button className="submitBtn" >Submit</button>
                <p className="forgot-password text-right">
                        New User? <a href="/signup">Register</a>
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

export default Login;