import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import MessagingHistoryTable from '../components/MessagingHistory/MessagingHistoryTable';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SelectDate from '../components/Date/SelectDate';
import AddButton from '../components/Contacts/AddButton';

const MessagingHistory = () => {
    return (
        <section className='messaging__history__wrp prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Contacts & Messaging /' subtitle2='Message History' subtitle3='' title='Message History' />
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
                                    <SelectDate />
                                </li>
                                <li>
                                    <AddButton />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <MessagingHistoryTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MessagingHistory;
