import React from 'react';
import "../css/AddItem.css";

function AddItem() {
    return (
        <div className='addItem'>
            <h3>Add New Item for Sale</h3>
            <form method='POST'>
                <div class="form-group">
                    <label for="itemName">Item Name</label>
                    <input type="text" class="form-control" name="itemName" autocomplete="off" />
                    <br />
                    <label for="itemPrice">Item Price</label>
                    <input type="text" class="form-control" name="itemPrice" autocomplete="off" />
                </div>
            </form>
            <button className='addBtn'>Add for Sale</button>
        </div>
    )
}

export default AddItem;
