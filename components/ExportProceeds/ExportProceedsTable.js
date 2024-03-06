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

const ExportProceedsTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        date: '30 Nov 2023',
        customername: 'Name Here',
        booktype:'DBU',
        number: 'Name',
        billnumber: '99,000,00,00,000.0066',
        value: 'BDT',
        nostro: '99,000,00,00,000.00',
        cmportion: '99,000,00,00,000.00',
        encashedamount:'99,000,00,00,000.00',
        rate: '100',
        value:'BB',
        date:' Cheque',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        date: '30 Nov 2023',
        customername: 'Name Here',
        booktype:'DBU',
        number: 'Name',
        billnumber: '99,000,00,00,000.0066',
        value: 'BDT',
        nostro: '99,000,00,00,000.00',
        cmportion: '99,000,00,00,000.00',
        encashedamount:'99,000,00,00,000.00',
        rate: '100',
        value:'BB',
        date:' Cheque',
        action1:<i class="ri-download-2-line"></i>,
        action:<i class="ri-more-2-fill"></i>,
        },
          {
          date: '30 Nov 2023',
          customername: 'Name Here',
          booktype:'DBU',
          number: 'Name',
          billnumber: '99,000,00,00,000.0066',
          value: 'BDT',
          nostro: '99,000,00,00,000.00',
          cmportion: '99,000,00,00,000.00',
          encashedamount:'99,000,00,00,000.00',
          rate: '100',
          value:'BB',
          date:' Cheque',
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
      prop: 'customername',
      title: 'Customer Name'
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
        prop: 'number',
        title: 'L/C Number'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'billnumber',
        title: 'Bill Number'
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
        prop: 'nostro',
        title: 'NOSTRO'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'cmportion',
        title: 'CM Portion'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'encashedamount',
        title: 'Encashed Amount'
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
        prop: 'value',
        title: 'Value'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'date',
        title: 'Date'
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

export default ExportProceedsTable;

