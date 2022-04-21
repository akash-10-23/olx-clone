import Axios  from 'axios';
import {React,useEffect,useState} from 'react';
import "../css/AddItem.css";
import { useStateValue } from '../StateProvider';

function AddItem() {
    
    const [{ items, username }, dispatch] = useStateValue();
    const [itemDetails, setItemDetails] = useState({name: "", price:0, imgLink:""});

    const handleAddItem = (e) => {
        e.preventDefault();

        Axios({
            method: "POST",
            data: {
                username: username,
                name: itemDetails.name,
                price: itemDetails.price,
                imgLink: itemDetails.imgLink
            },
            withCredentials: true,
            url: "http://localhost:8080/additem",
          }).then((res) => {
              console.log(res);     
          });
    }

    return (
        <div className='addItem'>
            <h3>Add New Item for Sale</h3>
            <form method='POST' onSubmit={handleAddItem}>
                <div class="form-group">
                    <label for="itemName">Item Name</label>
                    <input
                        type="text"
                        class="form-control"
                        name="itemName"
                        value={itemDetails.name}
                        onChange={(e) => setItemDetails({...itemDetails,name: (e.target.value)})}
                        autocomplete="off" 
                    />
                    <br />
                    <label for="itemPrice">Item Price</label>
                    <input
                        type="text"
                        class="form-control"
                        name="itemPrice"
                        value={itemDetails.price}
                        onChange={(e) => setItemDetails({...itemDetails,price: (e.target.value)})}
                        autocomplete="off" 
                    />
                    <br />
                    <label for="itemImg">Item Image Link(.png,.jpg)</label>
                    <input
                        type="text"
                        class="form-control"
                        name="itemImg"
                        value={itemDetails.imgLink}
                        onChange={(e) => setItemDetails({...itemDetails,imgLink: (e.target.value)})}
                        autocomplete="off"     
                    />
                </div>
                <button type="submit" className='addBtn'>Add for Sale</button>
            </form>
        </div>
    )
}

export default AddItem;
