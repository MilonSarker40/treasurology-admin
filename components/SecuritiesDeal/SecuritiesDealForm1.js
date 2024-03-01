import React from 'react';

const SecuritiesDealForm1 = () => {
    return (
     <div className='book__type'>
        <ul className='reset-list clearfix'> 
           <li>
              <label>Last Coupon Date</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='10 Apr 2022' />
              </div>
           </li>
           <li>
              <label>Next Coupon Date</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='10 Apr 2022' />
              </div>
           </li>
           <li>
              <label>Day Count</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='Actual/Actual' />
              </div>
           </li>
        </ul>
    </div>
    );
}

export default SecuritiesDealForm1;
