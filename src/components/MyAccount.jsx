import React from 'react';
import "../css/MyAccount.css";
import AddItem from './AddItem';
import SaleItem from './SaleItem';
import Axios  from "axios";
import { useStateValue } from "../StateProvider";

function MyAccount() {

    const [{ items, username }, dispatch] = useStateValue();
    let uname;
    if (username) {
        uname = username.substring(0, username.indexOf("@"));
    }  
    
    const handleList = (e) => {
        e.preventDefault();

        Axios({
            method: "GET",
            withCredentials: true,
            url:`http://localhost:8080/forsale?username=${username}`
        }).then(res => {
            dispatch({
                type: "ALL_ITEMS",
                items: res.data
            });
        });
        console.log(items);
    }

    const handlePurchase = (e) => {
        e.preventDefault();

        Axios({
            method: "GET",
            withCredentials: true,
            url:`http://localhost:8080/purchaseList?username=${username}`
        }).then(res => {
            dispatch({
                type: "ALL_ITEMS",
                items: res.data
            });
            console.log("Items Fetched Successfully");
        });
    }
    
    return (
        <div className='myAccount'>
            <div className='myAccountLeft'>
                <img
                    className='myAccountAd'
                    src='https://miro.medium.com/max/1400/1*O5qWMAAL5Gf--nsrjL8Q9w.jpeg'
                    alt='Ad' 
                />

                <div>
                    <h3>Hello {uname},</h3>
                    
                    <form method="GET" onSubmit={handleList}>
                        <h2 className='myAccountTitle'>Your List</h2>
                        <button type='submit'>For Sale Items</button>

                        <button onClick={handlePurchase} id='purchase'>Purchsed Items </button>
                    </form>

                    <div className='allItems'>
                        {items.map(item => (
                            <SaleItem
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                status={item.status}
                                image={item.imgLink}
                            />
                        ))}
                    </div>
                    
                </div>
                
            </div>

            <div className='myAccountRight'>
                <AddItem />
            </div>
        </div>
    )
}

export default MyAccount;