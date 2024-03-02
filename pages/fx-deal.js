import React from 'react';
import CheckRadio from '../components/MoneyMarketDeal/CheckRadio';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import FxDealFrom from '../components/FxDeal/FxDealFrom';
import FxDealSelect from '../components/FxDeal/FxDealSelect';
import BuySellRadio from '../components/FxDeal/BuySellRadio';

const FxDeal = () => {
    return (
        <section className='fx__blotter__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module / ' subtitle1='Dealing /' subtitle2='Create Order /' subtitle3='FX Deal' title='FX Deal'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <CheckRadio />
                        <FxDealFrom />
                    </div>
                    <div className='col-md-4'>
                        <BuySellRadio />
                        <FxDealSelect />
                    </div>
                    <div className='col-md-4'>
                        <BuySellRadio />
                        <FxDealSelect />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FxDeal;
