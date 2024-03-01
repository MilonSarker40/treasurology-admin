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

const OverdueDealTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
        status:'Approved',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
        status:'Approved',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
        status:'Approved',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
        status:'Approved',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
        status:'Approved',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
        status:'Approved',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
        status:'Approved',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        id: 'D301122BFINCIBL20',
        dealdate: '30 Nov 2023',
        time: '14:05',
        counterparty: 'Bangladesh Finance LTD.',
        dealmethod: 'OTC',
        tenor: '14 Day/s',
        amount: '10,00,00,000.00',
        interestrate: '18.3%',
        maturitydate:'30 Nov 2023',
        remainingamount:'10,00,00,000.00',
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
        prop: 'counterparty',
        title: 'Counter Party'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'dealmethod',
        title: 'Method'
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
      {
        isFilterable: true,
        isSortable: false,
        prop: 'remainingamount',
        title: 'Remaining Amount'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'status',
        title: 'Settlement Status'
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
            <Row>
                <Col
                    className="d-flex flex-col justify-content-lg-right align-items-right justify-content-sm-end mb-2 mb-sm-0 firstletter1"
                    lg={6}
                    sm={6}
                    xs={12}
                >
                    <PaginationOptions alwaysShowPagination />
                </Col>
                <Col
                    className="d-flex flex-col justify-content-end align-items-end tablePagi"
                    lg={6}
                    sm={6}
                    xs={12}
                >
                    <Pagination alwaysShowPagination />
                </Col>
            </Row>
        </DatatableWrapper>
     </div>
    );
}

export default OverdueDealTable;
