import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import BorrowingLimitTable from '../components/BorrowingLimit/BorrowingLimitTable';

const DealerLimit = () => {
    return (
        <div className='dealer__limit__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Limit /' subtitle2='Dealer Limit' title='Dealer Limit' />
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
                        <BorrowingLimitTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DealerLimit;
