import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import AverageDealLendingTable from '../components/DailyAverageDeal/AverageDealLendingTable';
import AverageDealBorrowingTable from '../components/DailyAverageDeal/AverageDealBorrowingTable';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import DownloadSelect from '../components/DownloadSelect/DownloadSelect';

const DailyAverageDeal = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Report /' subtitle2='Daily Average Deal /' title='Daily Average Deal' /> 
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
                        <AverageDealLendingTable />
                    </div>
                    <div className='col-md-12'>
                        <AverageDealBorrowingTable />
                    </div>
                </div>
            </div>          
        </div>
    );
}

export default DailyAverageDeal;
