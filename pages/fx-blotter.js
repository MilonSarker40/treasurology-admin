import React from 'react';
// import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FxBlotterSelect from '../components/FxBlotter/FxBlotterSelect';
import SearchField from '../components/FxBlotter/SearchField';
import FxBlotterTable from '../components/FxBlotter/FxBlotterTable';
import Classes from '../styles/moneyblotter.module.css';
import InputRefreshBtn from '../components/InputRefreshBtn/InputRefreshBtn';



const FxBlotter = () => {
    return (
        <section className='fx__blotter__sec__wrap prdLR30'>
            {/* <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Create Order /' subtitle3='FX Deal' title='FX Deal'/> */}
            <div className='container'>
                <div className='row'>
                   <div className='col-md-12'>
                      <div className='tabsWarp'>
                        <Tabs defaultActiveKey="Domestic" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Domestic" title="Domestic Banking Unit (DBU)">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='messaging__history__date' style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <ul className='clearfix reset-list' style={{float:'none',textAlign:'center'}}>
                                                <li>
                                                    <FxBlotterSelect />
                                                </li>
                                                <li>
                                                    <SearchField />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>BB USD Account </h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>SCB NY</h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>Mashreq NY </h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Offshore" title="Offshore Banking Unit (OBU)">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='messaging__history__date' style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <ul className='clearfix reset-list' style={{float:'none',textAlign:'center'}}>
                                                <li>
                                                    <FxBlotterSelect />
                                                </li>
                                                <li>
                                                    <SearchField />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>BB USD Account </h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>SCB NY</h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>Mashreq NY </h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Islamic" title="Islamic Banking Unit">
                                 <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='messaging__history__date' style={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                            <ul className='clearfix reset-list' style={{float:'none',textAlign:'center'}}>
                                                <li>
                                                    <FxBlotterSelect />
                                                </li>
                                                <li>
                                                    <SearchField />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>BB USD Account </h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>SCB NY</h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className={`${Classes.in__flow_table__grid}`}>
                                            <h5>Mashreq NY </h5>
                                            <FxBlotterTable />
                                            <InputRefreshBtn />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FxBlotter;
