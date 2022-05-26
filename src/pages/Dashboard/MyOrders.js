import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h1>My Orders</h1>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          SL No:
        </th>
        <th>TOOLS</th>
        <th>transaction id</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
        <th>CANCLE</th>
        <th>PAY MENT</th>
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
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
        transaction id
          <br/>
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button class="btn btn-error btn-xs">cancle</button>
        </th>
        <th>
          <button class="btn btn-accent btn-xs">payment</button>
        </th>
      </tr>
    
   
    </tbody>
    {/* <!-- foot --> */}
    
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;