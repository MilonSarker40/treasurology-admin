import React, { useState } from 'react';
import SettlementRadio from './SettlementRadio';
import FormDate from '../FormDate/FormDate';

const Settlement = () => {
    // State variables to hold field values
    const [settlementAccount, setSettlementAccount] = useState('Bangladesh Bank CA');
    const [settlementType, setSettlementType] = useState('T+0');
    const [dayCount, setDayCount] = useState('Actual/360');
    const [productName, setProductName] = useState('N/A');
    const [interestAmount, setInterestAmount] = useState('0.00');

    // Function to handle select change
    const handleSelectChange = (e, setter) => {
        setter(e.target.value);
    };

    // Function to handle Place Order button click
    const handlePlaceOrder = () => {
        // Make API call with the collected data
        // Example:
        fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                settlementAccount,
                settlementType,
                dayCount,
                productName,
                interestAmount,
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle API response
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    };

    return (
        <div className='book__type__wrap'>
          <SettlementRadio />
          <div className='book__type'>
             <ul className='reset-list clearfix'> 
                <li>
                    <label>Settlement Account</label>
                    <div className='select__field book__type__fld'>
                        <select className="form-select" aria-label="Settlement Account" value={settlementAccount} onChange={(e) => handleSelectChange(e, setSettlementAccount)}>
                            <option value="Bangladesh Bank CA">Bangladesh Bank CA</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </li>
                <li>
                    <label>Settlement Type</label>
                    <div className='select__field book__type__fld'>
                        <select className="form-select" aria-label="Settlement Type" value={settlementType} onChange={(e) => handleSelectChange(e, setSettlementType)}>
                            <option value="T+0">T+0</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </li>
                <li>
                    <label>Day Count</label>
                    <div className='select__field book__type__fld'>
                        <select className="form-select" aria-label="Day Count" value={dayCount} onChange={(e) => handleSelectChange(e, setDayCount)}>
                            <option value="Actual/360">Actual/360</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </li>
                <li>
                    <label>Transaction Date:</label>
                    <div className='input__field book__type__fld'>
                        <FormDate />
                    </div>
                </li>
                <li>
                    <label>Settlement Date</label>
                    <div className='input__field book__type__fld'>
                        <FormDate />
                    </div>
                </li>
                <li>
                    <label>Maturity Date</label>
                    <div className='input__field book__type__fld'>
                        <FormDate />
                    </div>
                </li>
                <li>
                    <label>Product Name</label>
                    <div className='select__field book__type__fld'>
                        <select className="form-select" aria-label="Product Name" value={productName} onChange={(e) => handleSelectChange(e, setProductName)}>
                            <option value="N/A">N/A</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </li>
                <li>
                    <label>Interest Amount</label>
                    <div className='select__field book__type__fld'>
                        <select className="form-select" aria-label="Interest Amount" value={interestAmount} onChange={(e) => handleSelectChange(e, setInterestAmount)}>
                            <option value="0.00">0.00</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </li>
                <li>
                    <label></label>
                    <div className='submit__btn book__type__fld'>
                        <button onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Settlement;
