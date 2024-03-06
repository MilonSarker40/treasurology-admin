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

const ReportNewLCTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        date: '30 Nov 2023',
        ReqNumber: '01256',
        customername: 'Regent Power',
        ctype: 'UPAS',
        value: '1,000,000.00',
        currency: 'USD',
        lcmargin: '100%',
        item:'LNG',
        sector:'Power',
        nostro:'SCB NY',
        lccommission: '0.25%',
        maturitydate: '30 May 24',
        financing: 'BRAC-30Days @3L+2.5% Bank of China-60 Days@3L+2.5%',
        remarks: 'Remarks',
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
      prop: 'ReqNumber',
      title: 'Requisition Number'
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
        prop: 'ctype',
        title: 'L/C Type'
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
        prop: 'currency',
        title: 'Currency'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'lcmargin',
        title: 'LC Margin'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'item',
        title: 'Item'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'sector',
        title: 'Sector'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'nostro',
      title: 'NOSTRO'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'lccommission',
      title: 'LC commission'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'maturitydate',
      title: 'Maturity Date'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'financing',
      title: 'Financing '
      },
      {
       isFilterable: false,
       isSortable: true,
       prop: 'remarks',
       title: 'Remarks'
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

export default ReportNewLCTable;

