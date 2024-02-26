import React from 'react';
import SettlementRadio from './SettlementRadio';

const Settlement = () => {
    return (
        <div className='book__type__wrap'>
          <SettlementRadio />
          <div className='book__type'>
             <ul className='reset-list clearfix'> 
                <li>
                    <label>Settlement Account</label>
                    <div className='select__field book__type__fld'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Bangladesh Bank CA</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </li>
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
                    <label>Day Count</label>
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
                            <option selected>11 April 2022</option>
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
                            <option selected>N/A</option>
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
            </ul>
        </div>
    </div>
    );
}

export default Settlement;
