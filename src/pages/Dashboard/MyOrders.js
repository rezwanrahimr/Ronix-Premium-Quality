import React from 'react';

const MyOrders = () => {
  return (
    <div className='mt-10'>
    <h1 className='my-5 text-2xl font-bold'>MY ORDER</h1>
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
                    <div class="font-bold">tools name</div>
                    
                  </div>
                </div>
              </td>
              <td>
                transaction id
              </td>
              <td>
               tools quantity
              </td>
              <td>price</td>
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