import React from 'react';
import Classes from '../../components/MoneyMarketDeal/checkradio.module.css';

const BuySellRadio = () => {
    return (
        <div className='form__check__wrap clearfix'>
            <div className={`${Classes.label__text}`}>
                <label>Type</label>
            </div>
            <div className={`${Classes.form__check__innr}`}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Buy" id="buy" checked/>
                    <label class="form-check-label" for="buy">Buy</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Sell" id="Sell"/>
                    <label class="form-check-label" for="Sell">Sell</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Action" id="action"/>
                    <label class="form-check-label" for="action">Action</label>
                </div>
            </div>
        </div>
    );
}

export default BuySellRadio;
