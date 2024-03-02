import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import DealRolloverTable from '../components/DealRollover/DealRolloverTable';

const DealRollover = () => {
    return (
        <div className='otc__order__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Deal Rollover' title='Deal Rollover' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <DealRolloverTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DealRollover;
