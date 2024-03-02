import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import OtcOrderTable from '../components/OtcOrder/OtcOrderTable';

const IncomingOrder = () => {
    return (
        <div className='otc__order__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Incoming Order' title='Incoming Order' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <OtcOrderTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomingOrder;
