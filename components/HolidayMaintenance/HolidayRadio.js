import React from 'react';
import Classes from '../../components/MoneyMarketDeal/checkradio.module.css';

const HolidayRadio = () => {
    return (
        <div className='form__check__wrap clearfix'>
            <div className={`${Classes.label__text}`}>
                <label>Incoming Order</label>
            </div>
            <div className={`${Classes.form__check__innr}`}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="dbu" id="dbu" checked/>
                    <label class="form-check-label" for="dbu">DBU</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="obu" id="obu"/>
                    <label class="form-check-label" for="obu">OBU</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="islamic" id="islamic"/>
                    <label class="form-check-label" for="islamic">Islamic</label>
                </div>
            </div>
        </div>
    );
}

export default HolidayRadio;

