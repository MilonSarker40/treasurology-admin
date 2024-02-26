import React from 'react';
import CheckRadio from './CheckRadio';

const BookType = () => {
    return (
        <div className='book__type__wrap'>
            <CheckRadio />
            <div className='book__type'>
                <ul className='reset-list clearfix'> 
                   <li>
                      <label>Amount</label>
                      <div className='input__field book__type__fld'>
                          <input type='text' placeholder='Amount' />
                      </div>
                   </li>
                   <li>
                      <label>Currency</label>
                      <div className='select__field book__type__fld'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>BDT</option>
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
                      <label>Instrument  Name</label>
                      <div className='select__field book__type__fld'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Product</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                      </div>
                   </li>
                   <li>
                      <label>Tenor (Day/s)</label>
                      <div className='input__field book__type__fld'>
                          <input type='text' placeholder='Input Tenor' />
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
                   <li>
                      <label></label>
                      <div className='submit__btn book__type__fld'>
                          <button>Place Order</button>
                      </div>
                   </li>
                </ul>
            </div>
        </div>
            
    );
}

export default BookType;
