import React from 'react';
import "../css/Item.css";

function Item(props) {

    const { id, name, price, status, image } = props;
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
                <button>Buy Now</button>
            </div>
            
        </div>
    )
}

export default Item;
