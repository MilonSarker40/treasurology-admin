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

const InwardRemittanceTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        date: '30 Nov 2023',
        booktype: 'DBU',
        counterparty:'Name Here',
        value: 'Name',
        invoice: '99,000,00,00,000.00',
        rate: '100',
        valuedate: 'BB Cheque',
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
      prop: 'date',
      title: 'Date'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'booktype',
      title: 'Book Type'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'counterparty',
        title: 'Counter Party'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'value',
        title: 'Value'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'invoice',
        title: 'No of Invoice'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'rate',
        title: 'Rate'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'valuedate',
        title: 'Value Date'
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

export default InwardRemittanceTable;

