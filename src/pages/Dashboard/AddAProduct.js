import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        console.log({ ...data, email: user.email });
        const url = 'https://enigmatic-ridge-01425.herokuapp.com/tools';
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({...data}),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success('ADD A NEW TOOLS SUCCESSFULLY')
            });
    };
    return (
        <div className="w-50 mx-auto">
                <h1 className='my-5 text-2xl font-bold'>ADD NEW TOOLS</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    className="form-control"
                    {...register("name")}

                />
                 <input
                    placeholder="Photo Url"
                    className="form-control"
                    type="text"
                    {...register("img")}
                />
                <textarea
                    className="my-2 form-control"
                    placeholder="Description"
                    {...register("description")}

                />
                <input
                    className="my-2 form-control"
                    placeholder="Minimum Order"
                    type="number"
                    {...register("minimumOrder")}
                />
                <input
                    placeholder="Available Quantity"
                    className="form-control"
                    type="number"
                    {...register("availableQuantity")}
                />
                <input
                    placeholder="Quantity"
                    className="form-control"
                    type="number"
                    {...register("quantity")}
                />
                <input
                    className="my-2 form-control"
                    placeholder="price"
                    {...register("price")}
                />
               
                
                <input type="submit" className="btn btn-primary fw-bold mb-5" value="Submit" />
            </form>

        </div>
    );
};

export default AddAProduct;