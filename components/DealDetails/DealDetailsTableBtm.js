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

const DealDetailsTableBtm = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        initiatedby: 'Md. Omar Faruk',
        initiatedtime: '14 Day/s',
        approvedby: '10,00,00,000.00',
        approvedtime:'18.3%',
        status:'Approved',
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
      prop: 'initiatedby',
      title: 'Initiated By'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'initiatedtime',
      title: 'Initiated Time'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'approvedby',
        title: 'Approved By'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'approvedtime',
        title: 'Approved Time'
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

export default DealDetailsTableBtm;
