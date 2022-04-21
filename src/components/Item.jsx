import React from 'react';
import "../css/Item.css";
import { Link, useNavigate } from 'react-router-dom';
import  Axios  from "axios";
import { useStateValue } from '../StateProvider';

function Item(props) {

    const { id, name, price, image } = props;
    const [{ items, username }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const handlePurchase = () => {

        if (!username) {
            alert("Login To buy this Item");
        }
        else {
            Axios({
                method: "POST",
                data: {
                    buyer: username,
                    name: name,
                    price: price,
                    imgLink: image
                },
                withCredentials: true,
                url: "http://localhost:8080/purchase",
            }).then((res) => {
                console.log(res);
                alert(`You Bought ${name} for ₹ ${price}`);
                navigate("/myaccount");                
            });
        }
        
    }
    return (
        <div className="product">
            <img
                src={image}
                alt=""    
            />
            <div className="productInfo">
                <div className='productPrice'>
                    ₹ {price}
                    <div className='productName'>{name}</div>
                </div>
                <button onClick={handlePurchase}>Buy Now</button>
            </div>
            
        </div>
    )
}

export default Item;
