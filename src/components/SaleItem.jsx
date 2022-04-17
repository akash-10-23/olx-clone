import React from 'react';
import "../css/SaleItem.css";

function SaleItem(props) {

    const { id, name, price,status,image } = props;

    return (
        <div className='saleItem'>
            <img
                className='saleItemImage'
                src={image}
                alt='' 
            />
            
            <div className='saleItemInfo'>
                <div className='saleItemPrice'>
                    ₹{price}
                    <div className='saleItemName'>{name}</div>
                </div>
                
                <div
                    className='status'
                    style={{
                        color: (status === "Unsold") ? "red" : "green",
                        borderColor: (status === "Unsold") ? "red" : "green"
                    }}
                >{status}</div>
            </div>
        </div>
    )
}

export default SaleItem;
