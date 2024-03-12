import React, { useEffect, useState } from 'react';
import CheckRadio from './CheckRadio';
import SettlementRadio from './SettlementRadio';
import FormDate from '../FormDate/FormDate';

const BookType = () => {
    // State variables to hold field values
    const [currencylist, setCurrencylist] = useState([]);
    const [instrumentList, setInstrumentList] = useState([]);
    const [acceptanceTypeList, setacceptanceTypeList] = useState([]);
    const [paymentMethodList, setPaymentMethodList] = useState([]);

    const [currency, setCurrency] = useState('BDT');
    const [instrumentName, setInstrumentName] = useState('Select Product');
    const [acceptanceType, setAcceptanceType] = useState('Full');
    const [paymentMethod, setPaymentMethod] = useState('Full');
    const [amount, setAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [tenor, setTenor] = useState('');
    const [instruction, setInstruction] = useState('');

    const [settlementAccount, setSettlementAccount] = useState('Bangladesh Bank CA');
    const [settlementType, setSettlementType] = useState('T+0');
    const [dayCount, setDayCount] = useState('Actual/360');
    const [productName, setProductName] = useState('N/A');
    const [interestAmount, setInterestAmount] = useState('0.00');

    const token = localStorage.getItem('access_token');

    useEffect(() => {
        //Currency Api
        fetch("https://api.treasury.arthik.io/api/Currency", {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => setCurrencylist(data))
        .catch(error => {
            console.error('Error fetching currency:', error);
        });
        
        //Instrument Api
        fetch("https://api.treasury.arthik.io/api/Instrument", {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => setInstrumentList(data))
        .catch(error => {
            console.error('Error fetching Instrument:', error);
        });

        //Acceptance Type
        fetch("https://api.treasury.arthik.io/api/AcceptanceType", {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => setacceptanceTypeList(data))
        .catch(error => {
            console.error('Error fetching Acceptance:', error);
        });

        //Payment Method Api
        fetch("https://api.treasury.arthik.io/api/PaymentMethod", {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => setPaymentMethodList(data))
        .catch(error => {
            console.error('Error fetching Payment:', error);
        });

        //TenorDay Api
        fetch("https://api.treasury.arthik.io/api/TenorDay", {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            // Assuming data is an array of tenor options, set the initial tenor
            if (data.length > 0) {
                setTenor(data[0]); // Set the initial tenor to the first option
            }
        })
        .catch(error => {
            console.error('Error fetching TenorDay:', error);
        });


    }, [token]);

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
            console.error('Error placing order:', error);
        });
    };

    return (
        <div className='book__type__wrap'>
            <div className='money__deal__form__radio'>
                <ul className='clearfix reset-list'>
                    <li>
                        <CheckRadio />
                    </li>
                    <li>
                        <SettlementRadio />
                    </li>
                </ul>
            </div>
            <div className='book__type money__deal__form__wrap'>
                <ul className='reset-list clearfix'> 
                    <li>
                        <label>Amount</label>
                        <div className='input__field book__type__fld'>
                            <input type='text' placeholder='Amount' value={amount} onChange={(e) => handleInputChange(e, setAmount)} />
                        </div>
                    </li>
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
                        <label>Currency</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Currency" value={currency} onChange={(e) => handleSelectChange(e, setCurrency)}>
                                {currencylist.map((currency, index) => (
                                    <option key={index} value={currency}>{currency}</option>
                                ))}
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
                        <label>Interest Rate (%)</label>
                        <div className='input__field book__type__fld'>
                            <input type='text' placeholder='Interest Rate' value={interestRate} onChange={(e) => handleInputChange(e, setInterestRate)} />
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
                        <label>Instrument Name</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Instrument Name" value={instrumentName} onChange={(e) => handleSelectChange(e, setInstrumentName)}>
                                {instrumentList.map((instrumentName,index)=>(
                                    <option key={index} value="instrumentName">{instrumentName}</option>
                                ))}
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
                        <label>Tenor (Day/s)</label>
                        <div className='input__field book__type__fld'>
                            <input type='text' placeholder='Input Tenor' value={tenor} onChange={(e) => handleInputChange(e, setTenor)} />
                        </div>
                    </li>
                    <li>
                        <label>Settlement Date</label>
                        <div className='input__field book__type__fld'>
                            <FormDate />
                        </div>
                    </li>
                    <li>
                        <label>Acceptance Type</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Acceptance Type" value={acceptanceType} onChange={(e) => handleSelectChange(e, setAcceptanceType)}>
                                {acceptanceTypeList.map((acceptanceType,index)=>(
                                    <option value="acceptanceType">{acceptanceType}</option>
                                ))}
                            </select>
                        </div>
                    </li>
                    <li>
                        <label>Maturity Date</label>
                        <div className='input__field book__type__fld'>
                            <FormDate />
                        </div>
                    </li>
                    <li>
                        <label>Payment Method</label>
                        <div className='select__field book__type__fld'>
                            <select className="form-select" aria-label="Payment Method" value={paymentMethod} onChange={(e) => handleSelectChange(e, setPaymentMethod)}>
                                {paymentMethodList.map((paymentMethod,index)=>(
                                    <option key={paymentMethod} value="paymentMethod">{paymentMethod}</option>
                                ))}
                            </select>
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
                        <label style={{paddingTop:'0'}}>Instruction</label>
                        <div className='input__field book__type__fld'>
                            <textarea placeholder='Put Instruction Here' value={instruction} onChange={handleTextareaChange}></textarea>
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

export default BookType;