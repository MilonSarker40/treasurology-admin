import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import DealDetailsReportTable from '../components/DealDetailsReport/DealDetailsReportTable';

const MoneyMarketDealDetailsReport = () => {
    return (
        <section className='details__report__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Report /' subtitle2='Money Market Deal Details Report' title='Money Market Deal Details Report' />
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
                        <DealDetailsReportTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoneyMarketDealDetailsReport;
