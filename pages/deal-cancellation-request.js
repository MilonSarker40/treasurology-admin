import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RevisionRequestTable from '../components/RevisionRequest/RevisionRequestTable';

const DealCancellationRequest = () => {
    return (
        <section className='lending__limit__sec__wrap prdLR30'>
        <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Deal Cancellation Request' title='Deal Cancellation Request' />
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='all__deals__tabs'>
                        <Tabs defaultActiveKey="requested" transition={false} id="noanim-tab-example" className="mb-4">
                            <Tab eventKey="requested" title="Requested" className='clearfix'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <RevisionRequestTable />
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="initiated" title="Initiated">
                                Tab content for Profile
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default DealCancellationRequest;
