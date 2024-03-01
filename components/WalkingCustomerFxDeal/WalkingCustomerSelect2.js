import React from 'react';

const WalkingCustomerSelect2 = () => {
    return (
     <div className='book__type'>
        <ul className='reset-list clearfix'> 
          <li>
             <label>Settlement Account</label>
             <div className='select__field book__type__fld'>
               <select class="form-select" aria-label="Default select example">
                   <option selected>BB/SCB NY</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
               </select>
             </div>
          </li>
          <li>
             <label>Settlement Account</label>
             <div className='select__field book__type__fld'>
               <select class="form-select" aria-label="Default select example">
                   <option selected>BB/SCB NY</option>
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

export default WalkingCustomerSelect2;
