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

const DailyDealTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '11:15 AM',
        type: 'OTC',
        counterparty: '14 Day/s',
        amount: '10,00,00,000.00',
        tenor:'18.3%',
        product:'30 Nov 2023',
        interestrate: 'Approved',
        method: '10,00,00,000.00',
        settlementtype: '10,00,00,000.00',
        settlementdate: '30 Nov 2023',
        maturitydate: '30 Nov 2023',
        },
     
    ]
   const headerData=[
      {
        prop: 'checkbox',
        checkbox: { idProp: 'name', className: 'table-checkbox' },
        alignment: { horizontal: 'center' }
      },
      {
        cellProps: {
            style: function noRefCheck(){}
        },
            isFilterable: false,
            isSortable: true,
            prop: 'id',
            title: 'Deal ID'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'dealdate',
      title: 'Deal Date'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'time',
      title: 'Time'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'type',
        title: 'Type'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'counterparty',
        title: 'Counterparty'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'amount',
        title: 'Amount'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'tenor',
        title: 'Tenor'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'product',
        title: 'Product'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'interestrate',
        title: 'Interest Rate'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'method',
        title: 'Method'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'settlementtype',
        title: 'Settlement Type'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'settlementdate',
      title: 'Settlement Date'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'maturitydate',
      title: 'Maturity Date'
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

export default DailyDealTable;
