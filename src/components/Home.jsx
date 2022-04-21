import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import "../css/Home.css";
import { useStateValue } from '../StateProvider';
import Item from './Item';

function Home() {

    const [{ items,homeItems, username }, dispatch] = useStateValue();
    const [itemList, setItemList] = useState();

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080/home",
        }).then((res) => {
            console.log(res);               
            dispatch({
                type: "HOME_ITEMS",
                homeItems: res.data
            });
        });
    },[]);

    return (
        <div className='home'>
            <div className="homeContainer">
                <img
                    className="homeImage"
                    src="https://statics.olx.in/olxin/banners/hero_bg_in_v1@1x.png"
                    alt="homepage"
                />

                <div className='homeRow'>
                    {homeItems.map(item => (
                        <Item
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.imgLink}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
