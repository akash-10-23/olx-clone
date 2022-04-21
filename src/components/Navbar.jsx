import React from 'react';
import "../css/Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import Axios  from "axios";

function Navbar() {

    const [{ items, username }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const handleAuthentication = () => {
        if (username) {
            Axios({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:8080/logout",
              }).then((res) => {
                  console.log(res);
                  dispatch({
                      type: "SET_USER",
                      username: null
                  });
                  navigate("/");
              });
        }
    }

    const handleForSale = () => {
        if (!username) {
            alert("Please Login First");
        }
    }

    let uname = "Guest";
    if (username) {
        uname = username.substring(0, username.indexOf("@"));
    }

    return (
        <div className="header">
        
            <Link to="/">
                <img 
                    className="headLogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png"
                    alt="olx-logo"
                />
            </Link>
            
            <div className="headerSearch">
                <input placeholder='Search Items...' className="headerSearchInput" type="text" />
                <SearchIcon style={{color: "white"}} className="headerSearchIcon"/>
            </div>

            <div className="headerNav">

                <Link style={{ textDecoration: 'none', color: 'black' }} to={!username && "/login"}> 
                    <div onClick={handleAuthentication} className="headerOption">
                        <span className="OptionLineOne">
                            Hello {uname}
                        </span>
                        <span className="OptionLineTwo">
                            {username ?
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                                  Sign Out
                                </Link> : "Sign In"}
                        </span>
                    </div>
                </Link> 

                <Link style={{ textDecoration: 'none', color: 'black' }} to={(username != null) && "/myaccount"}>
                    <div onClick={handleForSale} className="headerOption last">
                        <AccountCircleIcon className='accountIcon'/>
                        <span className="OptionLineTwo">
                             My Account
                        </span>
                    </div>
                </Link>


            </div>
            
        </div>
    )
}

export default Navbar;
