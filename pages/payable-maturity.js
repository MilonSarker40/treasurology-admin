import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import PayableMaturityTable from '../components/PayableMaturity/PayableMaturityTable';

const PayableMaturity = () => {
    return (
        <section className='receivable__maturity__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module' subtitle1='Fund Settlement' subtitle2='Payable on Maturity' title='Payable on Maturity'/>
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
                                <li>
                                    <SearchField />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <PayableMaturityTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PayableMaturity;
