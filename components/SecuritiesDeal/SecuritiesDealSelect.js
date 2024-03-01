import React from 'react';

const SecuritiesDealSelect = () => {
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
                  <input type='text' placeholder='Input Tenor' />
              </div>
           </li>
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
        </ul>
    </div>
    );
}

export default SecuritiesDealSelect;
