import React from 'react';
import { Container,Col, Row } from 'reactstrap';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import IncommingOrder from '../components/Dashboard/IncommingOrder';
import NoticeBoard from '../components/Dashboard/NoticeBoard';
import MarketMonitor from '../components/Dashboard/MarketMonitor';
import Contact from '../components/Dashboard/Contact';

const Dashboard = () => {
    return (
        <section className='dashboard__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dashboard'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='dashboard__Table__grid'>
                            <h5>Incoming Order</h5>
                            <IncommingOrder />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='dashboard__Table__grid'>
                            <h5>Outgoing Order</h5>
                            <IncommingOrder />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='dashboard__Table__grid'>
                            <h5>Notice Board</h5>
                            <NoticeBoard />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='dashboard__Table__grid'>
                            <h5>Market Monitor</h5>
                            <MarketMonitor />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='dashboard__Table__grid'>
                            <h5>Contacts</h5>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
