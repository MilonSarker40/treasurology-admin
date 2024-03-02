import React from 'react';

const ReverseRepoDealSelect = () => {
    return (
      <div className='book__type'>
        <ul className='reset-list clearfix'> 
           <li>
              <label>Counter Party:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Counter Party</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Type of deal</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Deal Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Tenor (Day/s)</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='Select Tenor' />
              </div>
           </li>
           <li>
              <label>Deal Date</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>10 Apr 2022</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Amount</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='100' />
              </div>
           </li>
           <li>
              <label>Interest Rate</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='0%' />
              </div>
           </li>
           <li>
              <label>Value Date</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>10 Apr 2022</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Maturity Date</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='10 Apr 2022' />
              </div>
           </li>
           <li>
              <div className='submit__btn book__type__fld'>
                <button>Place Order</button>
              </div>
           </li>
           <li></li>
        </ul>
    </div>
    );
}

export default ReverseRepoDealSelect;
