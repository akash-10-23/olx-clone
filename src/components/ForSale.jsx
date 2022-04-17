/* eslint-disable no-unused-vars */
import React from 'react';
import "../css/ForSale.css";
import AddItem from './AddItem';
import SaleItem from './SaleItem';

function ForSale() {

    // const [{ cart, user }, dispatch] = useStateValue();
    // let uname = "Guest";
    // if (user) {
    //     uname = user.email.substring(0, user.email.indexOf("@"));
    // }

    return (
        <div className='forSale'>
            <div className='forSaleLeft'>
                <img
                    className='forSaleAd'
                    src='https://miro.medium.com/max/1400/1*O5qWMAAL5Gf--nsrjL8Q9w.jpeg'
                    alt='Ad' 
                />

                <div>
                    <h3>Hello Guest,</h3>
                    <h2 className='forSaleTitle'>Your List</h2>

                    {/* {cart.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))} */}
                    <div className='allItems'>
                        <SaleItem 
                            id="1234445"
                            name="IPhone"
                            price={88900}
                            status="Unsold"
                            image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                        />

                        <SaleItem 
                            id="1234445"
                            name="IPhone"
                            price={88900}
                            status="Sold"
                            image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                        />

                        {/* <SaleItem 
                            id="1234445"
                            name="IPhone"
                            price={88900}
                            status="Sold"
                            image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                        /> */}
                    </div>
                    
                    
                </div>
                
            </div>

            <div className='forSaleRight'>
                <AddItem />
            </div>
        </div>
    )
}

export default ForSale;