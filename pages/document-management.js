import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import DocumentManagementTabs from '../components/DocumentManagement/DocumentManagementTabs';
import StartDate from '../components/Date/StartDate';
import SearchField from '../components/SearchField/SearchField';
import DownloadSelect from '../components/DownloadSelect/DownloadSelect';

const DocumentManagement = () => {
    return (
        <div className='prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Document /' subtitle2='Document Management ' title='Document Management ' />
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
                    <div className='col-md-12'>
                        <DocumentManagementTabs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocumentManagement;
