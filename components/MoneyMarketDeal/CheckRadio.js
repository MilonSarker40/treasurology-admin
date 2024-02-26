import React from 'react';
import Classes from '../../components/MoneyMarketDeal/checkradio.module.css';

const CheckRadio = () => {
    return (
        <div className='form__check__wrap clearfix'>
            <div className={`${Classes.label__text}`}>
                <label>Book Type</label>
            </div>
            <div className={`${Classes.form__check__innr}`}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label class="form-check-label" for="flexRadioDefault1">DBU</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">OBU</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                    <label class="form-check-label" for="flexRadioDefault3">Islamic</label>
                </div> 
            </div>
        </div>
    );
}

export default CheckRadio;
