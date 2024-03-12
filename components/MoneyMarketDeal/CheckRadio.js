import React, { useEffect, useState } from 'react';
import Classes from '../../components/MoneyMarketDeal/checkradio.module.css';

const CheckRadio = () => {
    const [selectedBookType, setSelectedBookType] = useState('DBU');
    const [list, setList] = useState([]);
    const url = "https://api.treasury.arthik.io/api/BookType";
    const token = localStorage.getItem("access_token");
    const type = localStorage.getItem("token_type");
    
    // Function to handle radio button change
    const handleRadioChange = (e) => {
        setSelectedBookType(e.target.value);
    };

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            // body: JSON.stringify({
            //     bookType: selectedBookType,
            // }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle API response
            console.log("RADIO BOOKTYPE")
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    }, [])

    // Function to handle API call
    const handleAPICall = () => {
        // Make API call here
        fetch(url, {
            // method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            // body: JSON.stringify({
            //     bookType: selectedBookType,
            // }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle API response
            console.log("RADIO BOOKTYPE")
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
                <label>Book Type</label>
            </div>
            <div className={`${Classes.form__check__innr}`}>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="bookType"
                        id="DBU"
                        value="DBU"
                        checked={selectedBookType === 'DBU'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="DBU">DBU</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="bookType"
                        id="OBU"
                        value="OBU"
                        checked={selectedBookType === 'OBU'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="OBU">OBU</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="bookType"
                        id="Islamic"
                        value="Islamic"
                        checked={selectedBookType === 'Islamic'}
                        onChange={handleRadioChange}
                    />
                    <label className="form-check-label" htmlFor="Islamic">Islamic</label>
                </div>
            </div>
            {/* Example of triggering API call */}
            {/* <button onClick={handleAPICall}>Make API Call</button> */}
        </div>
    );
}

export default CheckRadio;
