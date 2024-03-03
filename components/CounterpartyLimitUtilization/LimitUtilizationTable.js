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

const LimitUtilizationTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        id: '1',
        bankname: 'Sonali Bank LTD',
        allocatedlimit: '10,000,000,000.00',
        utilizedlimit: '1,000,000,000.00',
        unutilizedlimit: '9,000,000,000.00',
        },
        {
        id: '2',
        bankname: 'Sonali Bank LTD',
        allocatedlimit: '10,000,000,000.00',
        utilizedlimit: '1,000,000,000.00',
        unutilizedlimit: '9,000,000,000.00',
        },
        {
        id: '3',
        bankname: 'Sonali Bank LTD',
        allocatedlimit: '10,000,000,000.00',
        utilizedlimit: '1,000,000,000.00',
        unutilizedlimit: '9,000,000,000.00',
        },
        {
        id: '4',
        bankname: 'Sonali Bank LTD',
        allocatedlimit: '10,000,000,000.00',
        utilizedlimit: '1,000,000,000.00',
        unutilizedlimit: '9,000,000,000.00',
        },
        {
        id: '5',
        bankname: 'Sonali Bank LTD',
        allocatedlimit: '10,000,000,000.00',
        utilizedlimit: '1,000,000,000.00',
        unutilizedlimit: '9,000,000,000.00',
        },
        {
        id: '6',
        bankname: 'Sonali Bank LTD',
        allocatedlimit: '10,000,000,000.00',
        utilizedlimit: '1,000,000,000.00',
        unutilizedlimit: '9,000,000,000.00',
        },
        {
        id: '7',
        bankname: 'Sonali Bank LTD',
        allocatedlimit: '10,000,000,000.00',
        utilizedlimit: '1,000,000,000.00',
        unutilizedlimit: '9,000,000,000.00',
        },
    ]
   const headerData=[
      {
       cellProps: {
            style: function noRefCheck(){}
        },
        isFilterable: false,
        isSortable: true,
        prop: 'id',
        title: 'SL'
        },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'bankname',
      title: 'Bank Name'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'allocatedlimit',
      title: 'Allocated Limit'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'utilizedlimit',
        title: 'Utilized Limit'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'unutilizedlimit',
        title: 'Unutilized Limit'
      },
   ]
  
   
   useEffect(() => {
    fetch("url")
      .then((res) => res.json())
      .then((data) => setData(data));
    setData(bodyData);
  },[])

    return (
         <div className={`${Classes.data__table__wrap}`}>
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

export default LimitUtilizationTable;
