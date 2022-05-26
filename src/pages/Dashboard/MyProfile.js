import React from 'react';
import { useNavigate } from 'react-router-dom';


const MyProfile = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='my-5 text-2xl font-bold'>MY PROFILE</h1>
            <div>
                {/* image */}
                <div class="avatar my-5">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>

                </div>
                <div className='font-bold text-1xl'>
                    <h1 >Name: </h1>
                    <h1 >Email: </h1>
                    <h1 >Phone: </h1>
                    <h1 >Address: </h1>
                    <h1 >Education: </h1>
                    <h1 >Social Media</h1>
                    <h1 >LinkdIn: </h1>
                    <h1 >Facebook: </h1>
                </div>

                <button class="btn btn-active mt-10" onClick={() => navigate("/updateProfile")}>update</button>
            </div>

        </div>
    );
};

export default MyProfile;