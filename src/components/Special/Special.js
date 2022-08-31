import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ornament}) => {
    const ring=useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <h5>Gift:{ring}</h5>
        </div>
    );
};

export default Special;