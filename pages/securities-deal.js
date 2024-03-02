import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import SecuritiesDealForm from '../components/SecuritiesDeal/SecuritiesDealForm';
import SecuritiesDealSelect from '../components/SecuritiesDeal/SecuritiesDealSelect';
import SecuritiesDealForm1 from '../components/SecuritiesDeal/SecuritiesDealForm1';
import BuySellRadio from '../components/FxBlotter/BuySellRadio';
import CategoryRadio from '../components/SecuritiesDeal/CategoryRadio';
import IncomingOrderRadio from '../components/SecuritiesDeal/IncomingOrderRadio';

const SecuritiesDeal = () => {
    return (
        <section className='securities__deal__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Create Order /' subtitle3='Securities Deal' title='Securities Deal' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <IncomingOrderRadio />
                    </div>
                    <div className='col-md-4'>
                        <BuySellRadio />
                    </div>
                    <div className='col-md-4'>
                        <CategoryRadio />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <SecuritiesDealSelect />
                    </div>
                    <div className='col-md-4'>
                        <SecuritiesDealForm />
                    </div>
                    <div className='col-md-4'>
                        <SecuritiesDealForm1 />
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

export default SecuritiesDeal;
