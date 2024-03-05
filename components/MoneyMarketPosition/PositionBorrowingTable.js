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

const PositionBorrowingTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        id: '342424234',
        tenor: '10%',
        amount: '377676931686',
        interestrate: '8%',
        maturitydate: '12 April 2023',
        },
        {
        id: '342424234',
        tenor: '10%',
        amount: '377676931686',
        interestrate: '8%',
        maturitydate: '12 April 2023',
        },
        {
        id: '342424234',
        tenor: '10%',
        amount: '377676931686',
        interestrate: '8%',
        maturitydate: '12 April 2023',
        },
        {
        id: '342424234',
        tenor: '10%',
        amount: '377676931686',
        interestrate: '8%',
        maturitydate: '12 April 2023',
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
      prop: 'tenor',
      title: 'Tenor'
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
        prop: 'interestrate',
        title: 'Interest Rate (%)'
      },
      {
        isFilterable: true,
        isSortable: false,
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
          <table className='table' style={{marginBottom:0}}>
            <tr>
                <th style={{background:'#41B8D6',padding:'20px 20px',textAlign:'center',color:'#fff'}}>Borrowing</th>
            </tr>
          </table>
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

export default PositionBorrowingTable;

