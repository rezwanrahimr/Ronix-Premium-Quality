import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllParts = ({ Tools}) => {
    const navigate = useNavigate();
    const {name,img,description,minimumOrder,availableQuantity,price} = Tools;
    return (
        <div>
            <div className="card w-96 h-screen bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img  src={img} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Mininum Order: {minimumOrder}</p>
                    <p>Available : {availableQuantity}</p>
                    <p>Price : ${price}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={()=>navigate('/purchase')}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllParts;