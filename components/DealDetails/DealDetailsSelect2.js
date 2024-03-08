import React from 'react';
import FormDate from '../FormDate/FormDate';

const DealDetailsSelect2 = () => {
    return (
      <div className='book__type'>
        <ul className='reset-list clearfix'> 
           <li>
              <label>Instruction:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Please provide BB Cheque</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Created By:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Md. Hossain</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Created Time:</label>
              <div className='select__field book__type__fld'>
                <FormDate />
              </div>
           </li>
           <li>
              <label>Approved by:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Mohammad Ahmed Nabil</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Approves Time:</label>
              <div className='select__field book__type__fld'>
                <FormDate />
              </div>
           </li>
           <li>
              <label>Chat Session ID:</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>1669765656_6447667_65764764</option>
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

export default DealDetailsSelect2;
