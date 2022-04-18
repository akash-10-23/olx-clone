import React from 'react';
import "../css/Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

function Navbar() {
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
                <Link style={{ textDecoration: 'none' , color: 'black'}} to="/forsale">
                    <div  className="headerOption">
                        <span className="OptionLineOne">
                            Items 
                        </span>
                        <span className="OptionLineTwo">
                            For Sale
                        </span>
                    </div>
                </Link>
                    

                <Link style={{ textDecoration: 'none' , color: 'black'}} to="/login"> 
                    <div  className="headerOption">
                        <span className="OptionLineOne">
                            Sign 
                        </span>
                        <span className="OptionLineTwo">
                            In
                        </span>
                    </div>
                </Link> 
                    <div className="headerOption last">
                        <AccountCircleIcon className='myAccount'/>
                        <span className="OptionLineTwo">
                             My Account
                        </span>
                        
                    </div>

            </div>
            
        </div>
    )
}

export default Navbar;
