import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import AllContactsTable from '../components/AllContacts/AllContactsTable';
import SearchField from '../components/SearchField/SearchField';
import SelectAction from '../components/AllContacts/SelectAction';
import SelectParticipant from '../components/AllContacts/SelectParticipant';




const AllContacts = () => {
    return (
        <section className='all__contacts__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Others /' subtitle2='All Contacts' title='All Contacts' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='messaging__history__date'>
                            <ul className='clearfix reset-list'>
                                <li>
                                    <SelectParticipant />
                                </li>
                                <li>
                                    <SelectAction />
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

export default AllContacts;
