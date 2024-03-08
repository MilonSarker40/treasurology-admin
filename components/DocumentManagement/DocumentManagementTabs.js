import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DocumentManagementTable from './DocumentManagementTable';


const DocumentManagementTabs = () => {
    return (
         <div className='import__payment__table'>
            <Tabs defaultActiveKey="dbu" id="uncontrolled-tab-example">
                <Tab eventKey="dbu" title="DBU">
                    <DocumentManagementTable />
                </Tab>
                <Tab eventKey="obu" title="OBU">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="islamic" title="Islamic">
                    Tab content for Contact
                </Tab>
                <Tab eventKey="all" title="All">
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );
}

export default DocumentManagementTabs;
