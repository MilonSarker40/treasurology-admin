import React from 'react';
import FormDate from '../FormDate/FormDate';

const DealDetailsSelect1 = () => {
    return (
      <div className='book__type'>
        <ul className='reset-list clearfix'> 
           <li>
              <label>Tenor:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>14vDay(/s)</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Transaction Date:</label>
              <div className='input__field book__type__fld'>
                  <FormDate />
              </div>
           </li>
           <li>
              <label>Settlement Date</label>
              <div className='select__field book__type__fld'>
                <FormDate />
              </div>
           </li>
           <li>
              <label>Maturity Date</label>
              <div className='select__field book__type__fld'>
                <FormDate />
              </div>
           </li>
           <li>
              <label>Interest Amount</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>2,17,777.78</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Settlement Type:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>t+0</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Interest Method:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Actual/360</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Payment Method:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Cheque</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
        </ul>
    </div>
    );
}

export default DealDetailsSelect1;
