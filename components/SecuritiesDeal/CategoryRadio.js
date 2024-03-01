import React from 'react';
import Classes from '../../components/MoneyMarketDeal/checkradio.module.css';

const CategoryRadio = () => {
    return (
        <div className='form__check__wrap clearfix'>
            <div className={`${Classes.label__text}`}>
                <label>Category</label>
            </div>
            <div className={`${Classes.form__check__innr}`}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="htm" id="htm" checked/>
                    <label class="form-check-label" for="htm">HTM</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="hft" id="hft"/>
                    <label class="form-check-label" for="hft">HFT</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="others" id="others"/>
                    <label class="form-check-label" for="others">Others</label>
                </div>
            </div>
        </div>
    );
}

export default CategoryRadio;
