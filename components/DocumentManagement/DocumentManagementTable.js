import React,{useEffect, useState} from 'react';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  paginationOptionsProps,
  TableBody,
  TableHeader,
  BulkCheckboxControl,
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from '../Contacts/contacts.module.css';

const DocumentManagementTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        sl: '1',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        sl: '2',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        sl: '3',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        sl: '4',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        sl: '5',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        sl: '6',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        sl: '7',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        sl: '8',
        uploadingdate: '15 Jul 23',
        reportname: 'TICM',
        reportingdate: '10 Jul 23',
        uploadedby: 'Mrinmoy',
        uploadtime: '02:33 PM',
        remarks: 'Govt Holiday',
        status:'Approved',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },

    ]
   const headerData=[
      {
        prop: 'checkbox',
        checkbox: { idProp: 'name', className: 'table-checkbox' },
        alignment: { horizontal: 'center' }
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'sl',
      title: 'SL'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'uploadingdate ',
      title: 'Uploading Date '
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'reportname',
        title: 'Report Name'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'reportingdate',
        title: 'Reporting Date'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'uploadedby',
        title: 'Uploaded By'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'uploadtime',
        title: 'Upload Time'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'remarks',
        title: 'Remarks'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'status',
        title: 'Status'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'action1',
      title: ''
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'action',
      title: 'Action'
    },
   ]
  
   
   useEffect(() => {
    fetch("url")
      .then((res) => res.json())
      .then((data) => setData(data));
    setData(bodyData);
  },[])

    return (
         <div className={`${Classes.payment__data__table__wrap}`}>
            <DatatableWrapper
        
                body={data}
                headers={headerData}
                >
                <table className='table'>
                    <TableHeader />
                    <TableBody />
                </table>
            </DatatableWrapper>
        </div>
    );
}

export default DocumentManagementTable;

