import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ImportPaymentTabs from '../components/ImportPayment/ImportPaymentTabs';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';

const ImportPayment = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Report /' subtitle2='Import Payment' title='Import Payment' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='messaging__history__date'>
                            <ul className='clearfix reset-list'>
                                <li>
                                    <StartDate />
                                </li>
                                <li>
                                    <EndDate />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <ImportPaymentTabs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImportPayment;
