import React from 'react';

const SecuritiesDealForm = () => {
    return (
     <div className='book__type'>
        <ul className='reset-list clearfix'> 
           <li>
              <label>Face Value</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='100' />
              </div>
           </li>
           <li>
              <label>Coupon Rate</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='9.00%' />
              </div>
           </li>
           <li>
              <label>Trading Yield</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='Input' />
              </div>
           </li>
           <li>
              <label>Price/100</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='100.9999' />
              </div>
           </li>
           <li>
              <label>Clean Price</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='100.9999' />
              </div>
           </li>
           <li>
              <label>Holding Period</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='181' />
              </div>
           </li>
           <li>
              <label>Holding Period Int</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='20.20' />
              </div>
           </li>
           <li>
              <label>Settlement Price</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='102.9999' />
              </div>
           </li>
        </ul>
    </div>
    );
}

export default SecuritiesDealForm;
