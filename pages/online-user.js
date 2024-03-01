import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import AllContactsTable from '../components/AllContacts/AllContactsTable';
import SelectParticipant from '../components/AllContacts/SelectParticipant';
import SearchField from '../components/SearchField/SearchField';

const OnlineUser = () => {
    return (
        <section className='online__user__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Others /' subtitle2='Online User' title='Online User' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='messaging__history__date'>
                          <ul className='clearfix reset-list'>
                            <li>
                                <SelectParticipant />
                            </li>
                            <li>
                                <SearchField />
                            </li>
                          </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <AllContactsTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OnlineUser;
