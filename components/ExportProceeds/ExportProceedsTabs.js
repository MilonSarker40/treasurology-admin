import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ExportProceedsTable from './ExportProceedsTable';


const ExportProceedsTabs = () => {
    return (
         <div className='import__payment__table'>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="All">
                    <ExportProceedsTable />
                </Tab>
                <Tab eventKey="authorised" title="Authorised">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="pending" title="Pending">
                    Tab content for Contact
                </Tab>
                <Tab eventKey="declined" title="Declined">
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );
}

export default ExportProceedsTabs;
