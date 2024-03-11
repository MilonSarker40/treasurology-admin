import React, { useState } from 'react';
import CheckRadio from './CheckRadio';

const BookType = () => {
    // State variables to hold field values
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('BDT');
    const [interestRate, setInterestRate] = useState('');
    const [instrumentName, setInstrumentName] = useState('Select Product');
    const [tenor, setTenor] = useState('');
    const [acceptanceType, setAcceptanceType] = useState('Full');
    const [paymentMethod, setPaymentMethod] = useState('Full');
    const [instruction, setInstruction] = useState('');

    // Function to handle input change
    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    // Function to handle select change
    const handleSelectChange = (e, setter) => {
        setter(e.target.value);
    };

    // Function to handle textarea change
    const handleTextareaChange = (e) => {
        setInstruction(e.target.value);
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
                amount,
                currency,
                interestRate,
                instrumentName,
                tenor,
                acceptanceType,
                paymentMethod,
                instruction,
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
            <CheckRadio />
            <div className='book__type'>
                <ul className='reset-list clearfix'> 
                    <li>
                        <label>Amount</label>
                        <div className='input__field book__type__fld'>
                            <input type='text' placeholder='Amount' value={amount} onChange={(e) => handleInputChange(e, setAmount)} />
                        </div>
                    </li>
                    <li>
                        <label>Currency</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Currency" value={currency} onChange={(e) => handleSelectChange(e, setCurrency)}>
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label>Interest Rate (%)</label>
                        <div className='input__field book__type__fld'>
                            <input type='text' placeholder='Interest Rate' value={interestRate} onChange={(e) => handleInputChange(e, setInterestRate)} />
                        </div>
                    </li>
                    <li>
                        <label>Instrument Name</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Instrument Name" value={instrumentName} onChange={(e) => handleSelectChange(e, setInstrumentName)}>
                                <option value="Select Product">Select Product</option>
                                <option value="Product 1">Product 1</option>
                                <option value="Product 2">Product 2</option>
                                <option value="Product 3">Product 3</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label>Tenor (Day/s)</label>
                        <div className='input__field book__type__fld'>
                            <input type='text' placeholder='Input Tenor' value={tenor} onChange={(e) => handleInputChange(e, setTenor)} />
                        </div>
                    </li>
                    <li>
                        <label>Acceptance Type</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Acceptance Type" value={acceptanceType} onChange={(e) => handleSelectChange(e, setAcceptanceType)}>
                                <option value="Full">Full</option>
                                <option value="Partial">Partial</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label>Payment Method</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Payment Method" value={paymentMethod} onChange={(e) => handleSelectChange(e, setPaymentMethod)}>
                                <option value="Full">Full</option>
                                <option value="Partial">Partial</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label style={{paddingTop:'0'}}>Instruction</label>
                        <div className='input__field book__type__fld'>
                            <textarea placeholder='Put Instruction Here' value={instruction} onChange={handleTextareaChange}></textarea>
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

export default BookType;