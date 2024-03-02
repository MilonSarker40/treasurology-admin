import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import LendingLimitTable from '../components/LendingLimit/LendingLimitTable';
import SelectCounterparty from '../components/LendingLimit/SelectCounterparty';



const LendingLimit = () => {
    return (
        <section className='lending__limit__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Limit /' subtitle2='Lending Limit' title='Lending Limit' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='all__deals__tabs'>
                            <Tabs defaultActiveKey="lending" transition={false} id="noanim-tab-example" className="mb-4">
                                <Tab eventKey="lending" title="Lending" className='clearfix'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='messaging__history__date'>
                                                <ul className='clearfix reset-list'>
                                                    <li>
                                                        <SelectCounterparty />
                                                    </li>
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
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <LendingLimitTable />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="borrowing" title="Borrowing">
                                    Tab content for Profile
                                </Tab>
                                <Tab eventKey="rollover" title="Rollover Lending">
                                    Tab content for Contact
                                </Tab>
                                <Tab eventKey="rollover1" title="Rollover Lending">
                                    Tab content for Contact
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LendingLimit;
