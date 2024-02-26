import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ParticularTable from '../components/MoneyMarketBlotter/ParticularTable';
import IndicatorTable from '../components/MoneyMarketBlotter/IndicatorTable';
import DealBuyTable from '../components/MoneyMarketBlotter/DealBuyTable';
import Classes from '../components/MoneyMarketBlotter/moneyblotter.module.css';
import InFlowTable from '../components/MoneyMarketBlotter/InFlowTable';
import InputRefreshBtn from '../components/InputRefreshBtn/InputRefreshBtn';
import OutFlowTable from '../components/MoneyMarketBlotter/OutFlowTable';

const MoneyMarketBlotter = () => {
    return (
        <section className='money__market__blotter__sec__wrp prdLR30'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='tabsWarp'>
                            <Tabs defaultActiveKey="Domestic" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="Domestic" title="Domestic Banking Unit (DBU)">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <ParticularTable />
                                        </div>
                                        <div className='col-md-5'>
                                            <IndicatorTable />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className={`${Classes.in__flow_table__grid}`}>
                                                <h5>In Flow</h5>
                                                <InFlowTable />
                                                <InputRefreshBtn />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className={`${Classes.out__flow_table__grid}`}>
                                                <h5>In Flow</h5>
                                                <OutFlowTable />
                                                <InputRefreshBtn />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className={`${Classes.deal__buy__table_grid}`}>
                                                <h6>Todays Deal - Buy</h6>
                                                <DealBuyTable />
                                            </div>
                                            <div className={`${Classes.deal__buy__table_grid}`}>
                                                <h6>Todays Deal - Sell</h6>
                                                <DealBuyTable />
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Offshore" title="Offshore Banking Unit (OBU)">
                                    Tabs 2
                                </Tab>
                                <Tab eventKey="Islamic" title="Islamic Banking Unit">
                                    Tabs 3
                                </Tab>
                           </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoneyMarketBlotter;