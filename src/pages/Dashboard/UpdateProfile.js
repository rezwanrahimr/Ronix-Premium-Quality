import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
            <div className='flex h-screen justify-center items-center overflow-hidden'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Update Your Profile</h2>
                        <form >
                            <div className="form-control w-full max-w-xs">
                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Name" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input
                                    name='email'
                                    type="text"
                                    placeholder="Email" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    name='phone'
                                    type="text"
                                    placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input
                                    name='address'
                                    type="text"
                                    placeholder="Address" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    name='linkdin'
                                    type="text"
                                    placeholder="LinkdIn" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs my-2">
                                <input
                                    name='facebook'
                                    type="text"
                                    placeholder="Facebook" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <input className='btn w-full max-w-xs text-white' type="submit" value="submit" />
                        </form>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default UpdateProfile;