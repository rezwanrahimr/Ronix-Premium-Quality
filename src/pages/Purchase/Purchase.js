import React, { useEffect, useState } from 'react';

const Purchase = () => {
    // Loading..
    const [loading,setLoading] = useState({
        id:"",
        isLoading: false,
        isStock: false,
    });


    const [parts,setParts] = useState([]);
    const loadData = () =>{
        fetch('https://enigmatic-ridge-01425.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setParts(data))
    }
    // Load data when component is mounted.
    useEffect(()=>{
        loadData();
    },[]); 


    
    // Quantity Decrease function.
    const handleQuantity = (id,availableQuantity) => {
        setLoading({id,isLoading: true , isStock: false});
        const body = { availableQuantity: Number(availableQuantity) - 1

        };
        fetch("https://enigmatic-ridge-01425.herokuapp.com/available/"+ id,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body),

        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === 1){
                loadData();
            }
            setLoading({id: "", isLoading: false, isStock: false});
        });
    }

    // increase Quantity.
    const [stockQuantity,setStockQuantity] = useState("0");

    const handleQuantityIncrease = (id,availableQuantity) =>{
        if(stockQuantity === "")return;
        setLoading({id,isStock: true,isLoading: false});
        const body= {availableQuantity: !availableQuantity ? 0 : availableQuantity, stock: stockQuantity};
        fetch("https://enigmatic-ridge-01425.herokuapp.com/increase/" + id, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === 1){
                loadData();
            }
            setLoading({ id: "", isStock: false, isLoading: false});
        });
    }

    return (
       <div>
           <h1>This is Purchase page</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-5 p-10'>
          {
              parts.map(tools => <>
               <div className="card  h-screen bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img  src={tools.img} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tools.name}</h2>
                    <p>Mininum Order: {tools.minimumOrder}</p>
                    <p>Quantity : {tools.availableQuantity}</p>
                    <p>Avilabe : {tools.quantity}</p>
                    <p>Price : ${tools.price}</p>
                    <p>{tools.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleQuantity(tools._id,tools.availableQuantity)}
                        disabled={tools.minimumOrder > tools.availableQuantity}>Quantity DIecrease</button>
                        <div>
                           
                            
                            <input type="number"
                            className='form-control mb-1' placeholder='Add Quantity' onChange={(e) => setStockQuantity(e.target.value)} />
                        <button className="btn btn-primary" onClick={() => handleQuantityIncrease(tools._id,tools.availableQuantity)} 
                        disabled={tools.availableQuantity > tools.quantity}
                        
                        >Quantity Increase</button>
                        </div>
                        
                    </div>
                </div>
            </div>
              </>)
          }
        </div>
       </div>
    );
};

export default Purchase;