import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import NotificationTable from '../components/Notifications/NotificationTable';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';

const Notifications = () => {
    return (
        <section className='notifications__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Others /' subtitle2='Notification' title='Notifications'/>
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
                         </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <NotificationTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notifications;
