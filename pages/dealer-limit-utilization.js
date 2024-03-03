import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import DailyDealerLimitTable from '../components/DailyDealerLimit/DailyDealerLimitTable';
import SearchField from '../components/SearchField/SearchField';
import DownloadSelect from '../components/DownloadSelect/DownloadSelect';
import StartDate from '../components/DailyDealerLimit/StartDate';

const DealerLimitUtilization = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Report /' subtitle2='Daily Dealer Limit Utilization Report' title='Daily Dealer Limit Utilization Report' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='messaging__history__date'>
                            <ul className='clearfix reset-list'>
                                <li>
                                    <StartDate />
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
                        <DailyDealerLimitTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DealerLimitUtilization;
