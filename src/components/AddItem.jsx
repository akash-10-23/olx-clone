import React from 'react';
import "../css/AddItem.css";

function AddItem() {
    return (
        <div className='addItem'>
            <h4>Add New Item for Sale</h4>
            <form method='POST'>
                <div class="form-group">
                    <label for="itemName">Item Name</label>
                    <input type="text" class="form-control" name="itemName" autocomplete="off" />
                    <br />
                    <label for="itemPrice">Item Price</label>
                    <input type="text" class="form-control" name="itemPrice" autocomplete="off" />
                </div>
            </form>
            <button>Add for Sale</button>
        </div>
    )
}

export default AddItem;
