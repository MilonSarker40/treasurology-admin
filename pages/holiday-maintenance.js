import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import DocumentManagementTabs from '../components/DocumentManagement/DocumentManagementTabs';
import HolidayMaintenanceForm from '../components/HolidayMaintenance/HolidayMaintenanceForm';
import HolidayRadio from '../components/HolidayMaintenance/HolidayRadio';
import StartDate from '../components/Date/StartDate';
import SearchField from '../components/SearchField/SearchField';
import DownloadSelect from '../components/DownloadSelect/DownloadSelect';

const HolidayMaintenance = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Global Parameter /' subtitle2='Currency Holiday Maintenance /' subtitle3='Input Holiday' title='Document Management' />
            <div className='container'>
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
                                    <DownloadSelect />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <HolidayRadio />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <HolidayMaintenanceForm />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <DocumentManagementTabs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HolidayMaintenance;
