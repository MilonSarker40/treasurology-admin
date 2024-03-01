import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';
import SearchField from '../components/SearchField/SearchField';
import SelectProduct from '../components/AllDeals/SelectProduct';
import AllDealsTable from '../components/AllDeals/AllDealsTable';

const AllDeals = () => {
    return (
        <section className='all__deals__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='All deals' title='All deals' />
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
                                                        <SelectProduct />
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
                                            <AllDealsTable />
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

export default AllDeals;
