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
            body: JSON.stringify({ ...data }),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success('ADD A NEW TOOLS SUCCESSFULLY')
            });
    };
    return (
        <div className="">
            <h1 className='my-4 text-2xl font-bold'>ADD NEW TOOLS</h1>
            <div className='flex h-screen justify-center items-center overflow-hidden'>
                <div className='flex justify-center card w-96 bg-base-100 shadow-xl'>
                    <div className="card-body">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Name" class="input form-control input-bordered w-full max-w-xs" {...register("name")} />
                            <input type="text" placeholder="Photo Url" class="input my-2 form-control input-bordered w-full max-w-xs" {...register("img")} />
                            <input type="text" placeholder="Description" class="input form-control input-bordered w-full max-w-xs" {...register("description")} />
                            <input type="text" placeholder="Minimum Order" class="input form-control my-2 input-bordered w-full max-w-xs" {...register("minimumOrder")} />
                            <input type="text" placeholder="Available Quantity" class="input form-control input-bordered w-full max-w-xs" {...register("availableQuantity")} />
                            <input type="text" placeholder="Quantity" class="input my-2 form-control input-bordered w-full max-w-xs" {...register("quantity")} />
                            <input type="text" placeholder="price" class="input form-control input-bordered w-full max-w-xs" {...register("price")} />

                            <button type="submit" class="btn mt-2">submit</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddAProduct;