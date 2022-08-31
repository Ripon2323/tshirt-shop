import React from 'react';
import './Tshirt.css';

const Tshirt = ({ handleAddToCart, tShirt }) => {
    const { picture, name, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h4>Price:{price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;