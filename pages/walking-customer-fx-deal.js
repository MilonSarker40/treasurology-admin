import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import WalkingCustomerSelect from '../components/WalkingCustomerFxDeal/WalkingCustomerSelect';
import WalkingCustomerForm from '../components/WalkingCustomerFxDeal/WalkingCustomerForm';
import WalkingCustomerSelect2 from '../components/WalkingCustomerFxDeal/WalkingCustomerSelect2';
import CheckRadio from '../components/MoneyMarketDeal/CheckRadio';
import BuySellRadio from '../components/FxDeal/BuySellRadio';

const WalkingCustomerFxDeal = () => {
    return (
        <section className='walking__customer__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Create Order /' subtitle3='Walking Customer FX Deal' title='Walking Customer FX Deal' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <CheckRadio />
                    </div>
                    <div className='col-md-4'>
                        <BuySellRadio />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                       <WalkingCustomerSelect /> 
                    </div>
                    <div className='col-md-4'>
                        <WalkingCustomerForm />
                    </div>
                    <div className='col-md-4'>
                        <WalkingCustomerSelect2 />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <div className='submit__btn book__type__fld' style={{paddingBottom:'20px'}}>
                            <button>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WalkingCustomerFxDeal;
