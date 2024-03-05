import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import PositionBorrowingTable from '../components/MoneyMarketPosition/PositionBorrowingTable';
import PositionLendingTable from '../components/MoneyMarketPosition/PositionLendingTable';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import DownloadSelect from '../components/DownloadSelect/DownloadSelect';

const MoneyMarketPosition = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Report /' subtitle2='Money Market Position' title='Money Market Position' />
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
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <PositionBorrowingTable />
                    </div>
                    <div className='col-md-6'>
                        <PositionLendingTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoneyMarketPosition;
