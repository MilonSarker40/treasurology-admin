import React from 'react';

const ReverseRepoDealForm = () => {
    return (
      <div className='book__type'>
        <ul className='reset-list clearfix'> 
          <li>
              <label>ISIN</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select ISIN</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
          <li>
              <label>Issue Date</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='10 Apr 2022' />
              </div>
           </li>
           <li>
              <label>Maturity Date</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='10 Apr 2022' />
              </div>
           </li>
           <li>
              <label>Face Value</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='100' />
              </div>
           </li>
           <li>
              <label>Coupon Rate</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='0' />
              </div>
           </li>
           <li>
              <label>Mark to Market</label>
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
        </ul>
    </div>
    );
}

export default ReverseRepoDealForm;
