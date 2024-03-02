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
                    <input class="form-check-input" type="radio" name="repo" id="repo" checked/>
                    <label class="form-check-label" for="repo">Repo</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="reverse" id="reverse"/>
                    <label class="form-check-label" for="reverse">Reverse Repo</label>
                </div>
            </div>
        </div>
    );
}

export default CategoryRadio;
