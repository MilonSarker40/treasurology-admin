import React from 'react';

const FxBlotterSelect = () => {
    return (
      <div className='book__type'>
         <ul className='reset-list clearfix'> 
           <li>
              <label>Settlement Type</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>T+0</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Method of Interest</label>
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
              <label>Transaction Date</label>
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
              <label>Settlement Date</label>
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
              <label>Product Name</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>BS SWAP</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Interest Amount</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>0.00</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Nostro Name</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Citibank NA, New York</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label></label>
              <div className='submit__btn book__type__fld'>
                  <button>Place Order</button>
              </div>
           </li>
        </ul>
    </div>
    );
}

export default FxBlotterSelect;
