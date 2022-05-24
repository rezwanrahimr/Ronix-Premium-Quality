import React, { useEffect, useState } from 'react';
import AllParts from './AllParts';

const Parts = () => {
    const [parts,setParts] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-ridge-01425.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-5 p-10'>

            {
               parts.slice(0,6).map(Tools => <AllParts key={Tools._id} Tools={Tools}  ></AllParts>)
            }
            
        </div>
    );
};

export default Parts;