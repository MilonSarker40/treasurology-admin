import React from 'react';
import Classes from '../../components/MoneyMarketDeal/checkradio.module.css';

const SettlementRadio = () => {
    return (
        <div className='form__check__wrap clearfix'>
            <div className={`${Classes.label__text}`}>
                <label>Type</label>
            </div>
            <div className={`${Classes.form__check__innr}`}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Borrowing" id="Borrowing" checked/>
                    <label class="form-check-label" for="Borrowing">Borrowing</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Borrowing" id="Lending"/>
                    <label class="form-check-label" for="Lending">Lending</label>
                </div>
            </div>
        </div>
    );
}

export default SettlementRadio;
