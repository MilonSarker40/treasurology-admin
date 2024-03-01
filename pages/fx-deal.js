import React from 'react';
import CheckRadio from '../components/MoneyMarketDeal/CheckRadio';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import FxBlotterFrom from '../components/FxBlotter/FxBlotterFrom';
import FxBlotterSelect from '../components/FxBlotter/FxBlotterSelect';
import BuySellRadio from '../components/FxBlotter/BuySellRadio';

const FxDeal = () => {
    return (
        <section className='fx__blotter__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module / ' subtitle1='Dealing /' subtitle2='Create Order /' subtitle3='FX Deal' title='FX Deal'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <CheckRadio />
                        <FxBlotterFrom />
                    </div>
                    <div className='col-md-4'>
                        <BuySellRadio />
                        <FxBlotterSelect />
                    </div>
                    <div className='col-md-4'>
                        <BuySellRadio />
                        <FxBlotterSelect />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FxDeal;
