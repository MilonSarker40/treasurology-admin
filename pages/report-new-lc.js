import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ReportNewLCTabs from '../components/ReportNewLC/ReportNewLCTabs';
import StartDate from '../components/Date/StartDate';
import EndDate from '../components/Date/EndDate';

const ReportNewLc = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Trade Module /' subtitle1='Report /' subtitle2='New L/C' title='New L/C'  />
            <div className='container'>
                <div className='row'>
                     <div className='col-md-12'>
                        <div className='messaging__history__date'>
                            <ul className='clearfix reset-list'>
                                <li>
                                    <StartDate />
                                </li>
                                <li>
                                    <EndDate />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <ReportNewLCTabs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportNewLc;
