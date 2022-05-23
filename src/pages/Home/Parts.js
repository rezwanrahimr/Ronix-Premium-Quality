import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllParts from './AllParts';

const Parts = () => {
    const [parts,setParts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 my-5'>

            {
               parts.slice(0,6).map((Tools) => <AllParts key={Tools._id} Tools={Tools}  ></AllParts>)
            }
            
        </div>
    );
};

export default Parts;