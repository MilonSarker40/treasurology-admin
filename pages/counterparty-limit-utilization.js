import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import LimitUtilizationTable from '../components/CounterpartyLimitUtilization/LimitUtilizationTable';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import DownloadSelect from '../components/DownloadSelect/DownloadSelect';

const CounterpartyLimitUtilization = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Report /' subtitle2='Counterparty Limit Utilization Report' title='Counterparty Limit Utilization Report'  />
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
                                <li>
                                    <DownloadSelect />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <LimitUtilizationTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterpartyLimitUtilization;
