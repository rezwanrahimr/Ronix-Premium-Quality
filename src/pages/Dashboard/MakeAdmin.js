import React from 'react';

const MakeAdmin = () => {
    return (

        <div>
            <h1 className='my-5 text-2xl font-bold'>ADMIN</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                SL No:
                            </th>
                            <th>EMAIL</th>
                            <th>MAKE ADMIN</th>
                            <th>REMOVE ADMIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>
                                <div>1</div>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">email</div>
                                        <div class="text-sm opacity-50">user name</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            <button class="btn btn-accent btn-xs">MAKE ADMIN</button>
                            </td>
                            <td>
                            <button class="btn  btn-error btn-xs">REMOVE ADMIN</button>
                            </td>
                           
                           
                        </tr>


                    </tbody>
                    {/* <!-- foot --> */}


                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;