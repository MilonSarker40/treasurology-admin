import React from 'react';

const ReverseRepoDealForm = () => {
    return (
      <div className='book__type'>
        <ul className='reset-list clearfix'> 
          <li>
              <label>Holding Period Int</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='20.20' />
              </div>
           </li>
           <li>
              <label>Settlement Price</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='100.9999' />
              </div>
           </li>
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
        </ul>
    </div>
    );
}

export default ReverseRepoDealForm;
