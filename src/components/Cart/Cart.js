import React from 'react';
import './Cart.css';
const Cart = ({ cart, handleRemoveCart }) => {
    let command;
    if (cart.length == 0) {
        command = <p>Please add items.....</p>
    } else if (cart.length == 1) {
        command = <p>Add more item</p>
    } else {
        command = <p><small>Thanks for sharing</small></p>
    }

    return (
        <div>
            <h1>Selected Items:{cart.length}</h1>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {cart.length===3 && <div className='orange'>
                     <p>3 hole 3 jon k gift dibo</p>
                     <p>Yesssss</p>
                </div>}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Clear All</button>}
        </div>
    );
};

export default Cart;