import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import DealDetailsSelect from '../components/DealDetails/DealDetailsSelect';
import DealDetailsSelect1 from '../components/DealDetails/DealDetailsSelect1';
import DealDetailsSelect2 from '../components/DealDetails/DealDetailsSelect2';
import DealDetailsTable from '../components/DealDetails/DealDetailsTable';
import DealDetailsTableBtm from '../components/DealDetails/DealDetailsTableBtm';





const SingleDealDetails = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Deal Details'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='single__deal__details'>
                            <h5>Deal Information</h5>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <DealDetailsSelect />
                                </div>
                                <div className='col-md-4'>
                                    <DealDetailsSelect1 />
                                </div>
                                <div className='col-md-4'>
                                    <DealDetailsSelect2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='single__deal__details'>
                            <h5>First Leg Settlement Information</h5>
                            <DealDetailsTable />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='single__deal__details'>
                            <h5>MMR Issue Informatin</h5>
                            <DealDetailsTableBtm />
                        </div>
                    </div>
                    <div className='deal__dtls__btn'>
                        <button>Approve</button>
                        <button>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleDealDetails;
