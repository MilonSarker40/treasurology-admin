import ContactsTable from '../components/Contacts/ContactsTable';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import React from 'react';
import AddButton from '../components/Contacts/AddButton';

const Contacts = () => {
    return (
        <section className='contacts__table__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Contacts & Messaging /'  subtitle2='Contacts' title='Contacts'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='messaging__history__date'>
                            <ul className='clearfix reset-list'>
                                <li>
                                    <AddButton />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <ContactsTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
