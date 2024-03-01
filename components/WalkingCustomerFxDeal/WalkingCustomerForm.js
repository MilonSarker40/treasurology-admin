import React from 'react';

const WalkingCustomerForm = () => {
    return (
        <div className='book__type'>
        <ul className='reset-list clearfix'> 
           <li>
              <label>Base Rate</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>77</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Differential</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>2.5%</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Exchange Rate</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>88</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Currency Bought</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='1000,000,000.000' />
              </div>
           </li>
           <li>
              <label>Currency Sold</label>
              <div className='input__field book__type__fld'>
                  <input type='text' placeholder='1000,000,000.000' />
              </div>
           </li>
           <li>
              <label>Doc Upload</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select Document</option>
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

export default WalkingCustomerForm;
