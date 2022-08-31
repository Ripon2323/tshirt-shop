import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTshirts] = useTshirts()
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {
            const newItem = [...cart, selectedItem];
            setCart(newItem);
        } else {
            alert("Already added");
        }
    }

    const handleRemoveCart = (selectedItem) => {


        const rest = cart.filter(tShirt => tShirt._id != selectedItem._id);
        setCart(rest);
    }


return (
    <div className='home-container'>
        <div className="tshirt-conatainer">
            {
                tShirts.map(tShirt => <Tshirt
                    key={tShirt._id}
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
        </div>
        <div className="cart-container">
            <Cart
                cart={cart}
                handleRemoveCart={handleRemoveCart}
            ></Cart>
        </div>
    </div>
);
};

export default Home;