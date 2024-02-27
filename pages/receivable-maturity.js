import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ReceivableMaturityTable from '../components/ReceivableMaturity/ReceivableMaturityTable';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';

const ReceivableMaturity = () => {
    return (
        <section className='receivable__maturity__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Fund Settlement /' subtitle2='Receivable on Maturity' title='Receivable on Maturity'/>
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
                        <ReceivableMaturityTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReceivableMaturity;
