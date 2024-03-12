import React, { useState } from 'react';
import Classes from '../../components/MoneyMarketDeal/checkradio.module.css';

const SettlementRadio = () => {
    const [selectedType, setSelectedType] = useState('Borrowing');
    
    // Function to handle radio button change
    const handleRadioChange = (e) => {
        setSelectedType(e.target.value);
    };

    // Function to handle API call
    const handleAPICall = () => {
        // Make API call here
        fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: selectedType,
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
        <div className='form__check__wrap clearfix'>
            <div className={`${Classes.label__text}`}>
                <label>Type</label>
            </div>
            <div className={`${Classes.form__check__innr}`}>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id="Borrowing"
                        value="Borrowing"
                        checked={selectedType === 'Borrowing'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="Borrowing">Borrowing</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id="Lending"
                        value="Lending"
                        checked={selectedType === 'Lending'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="Lending">Lending</label>
                </div>
            </div>
            {/* Example of triggering API call */}
            {/* <button onClick={handleAPICall}>Make API Call</button> */}
        </div>
    );
}

export default SettlementRadio;
