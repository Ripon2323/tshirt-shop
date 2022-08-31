import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';

 export const RingContext = createContext('diamond');

const GrandPa = () => {
    const [house, setHouse] = useState(0);
    const ornament = "Diamond";
    const handleClickHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value='alur-ring'>
            <div className='grandpa'>
                <h4>Grand Pa</h4>
                <button onClick={handleClickHouse}>Buy A House</button>
                <p>House:{house}</p>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>

            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;