import React from 'react';

const FxBlotterFrom = () => {
    return (
      <div className='book__type'>
        <ul className='reset-list clearfix'> 
           <li>
              <label>Deal Type</label>
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
              <label>Amount</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='Amount' />
              </div>
           </li>
           <li>
              <label>Base Currency</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Price Currency</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Interest Rate (%)</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='Interest Rate' />
              </div>
           </li>
           <li>
              <label>Tenor (Day/s)</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='Tenor' />
              </div>
           </li>
           <li>
              <label>Acceptance Type</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Full</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Payment Method</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Full</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label style={{paddingTop:'0'}}>Instruction</label>
              <div className='input__field book__type__fld'>
                  <textarea placeholder='Put Instruction Here'></textarea>
              </div>
           </li>
        </ul>
    </div>
    );
}

export default FxBlotterFrom;
