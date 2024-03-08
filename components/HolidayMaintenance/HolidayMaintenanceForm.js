import React from 'react';
import FormDate from '../FormDate/FormDate';

const HolidayMaintenanceForm = () => {
    return (
      <div className='book__type'>
        <ul className='reset-list clearfix'> 
          <li>
              <label>Uploading  Date</label>
              <div className='select__field book__type__fld'>
                 <FormDate />
              </div>
           </li>
           <li>
              <label>Report Name</label>
              <div className='select__field book__type__fld'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>TICM</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
           </li>
           <li>
              <label>Exchange Rate</label>
              <div className='select__field book__type__fld'>
                <FormDate />
              </div>
           </li>
           <li>
              <label style={{paddingTop:'0'}}>Remarks</label>
              <div className='input__field book__type__fld'>
                  <textarea placeholder='Text here...'></textarea>
              </div>
           </li>
           <li>
              <label>Doc Upload</label>
              <div className='select__field book__type__fld file__upload__field'>
                    <label for="formFileMultiple" class="form-label" multiple>Select Document</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                    <span></span>
              </div>
           </li>
           <li>
            <label></label>
            <div className='submit__btn book__type__fld'>
                <button>Update</button>
            </div>
          </li>
        </ul>
    </div>
    );
}

export default HolidayMaintenanceForm;
