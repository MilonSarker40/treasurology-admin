import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StartDate from '../components/Date/StartDate';
import SearchField from '../components/SearchField/SearchField';
import DownloadBtn from '../components/OverdueDeals/DownloadBtn';
import OverdueDealTable from '../components/OverdueDeals/OverdueDealTable';



const OverdueDeal = () => {
    return (
        <section className='overdue__deal__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Overdue deal' title=' Overdue deal' />
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
                                                    <StartDate />
                                                </li>
                                                <li>
                                                    <SearchField />
                                                </li>
                                                <li>
                                                    <DownloadBtn />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                       <OverdueDealTable /> 
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="borrowing" title="Borrowing">
                                Tab content for Borrowing
                            </Tab>
                        </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OverdueDeal;
