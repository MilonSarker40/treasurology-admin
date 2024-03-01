import React from 'react';

const WalkingCustomerSelect = () => {
    return (
     <div className='book__type'>
        <ul className='reset-list clearfix'> 
          <li>
             <label>Deal Type</label>
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
             <label>Base Currency </label>
             <div className='select__field book__type__fld'>
               <select class="form-select" aria-label="Default select example">
                   <option selected>USD</option>
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
                   <option selected>BDT</option>
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
             <label>Customer Name</label>
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
             <label>Customer’s Bank</label>
             <div className='select__field book__type__fld'>
               <select class="form-select" aria-label="Default select example">
                   <option selected>Bank Name</option>
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

export default WalkingCustomerSelect;
