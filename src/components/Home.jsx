import React from 'react';
import "../css/Home.css";
import Item from './Item';

function Home() {
    return (
        <div className='home'>
            <div className="homeContainer">
                <img
                    className="homeImage"
                    src="https://statics.olx.in/olxin/banners/hero_bg_in_v1@1x.png"
                    alt="homepage"
                />

                <div className='homeRow'>
                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        status="Unsold"
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />
                </div>

                <div className='homeRow'>
                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                </div>

                <div className='homeRow'>
                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                    <Item 
                        id="1234445"
                        name="IPhone"
                        price={88900}
                        image="https://apollo-singapore.akamaized.net/v1/files/os3n0dhmd6gn3-IN/image;s=780x0;q=60"
                    />

                </div>
                {/* <div className="homeRow">
                    <Product 
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={897}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={7925}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="homeRow">
                    <Product 
                        id="4903850"
                        title="Huawei Band 6 Fitness Tracker Smartwatch for Men Women, 1.47''AMOLED Color Screen"
                        price={3999.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61RXMQtXS+L._SY355_.jpg"
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={7599.25}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={44924.25}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="homeRow">
                    <Product 
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={82124.25}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Home;
