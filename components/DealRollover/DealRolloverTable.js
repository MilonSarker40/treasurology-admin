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

const DealRolloverTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        // {
        // counterparty: 'Bangladesh Finance LTD.',
        // productname: 'D301122BFINCIBL20',
        // tenor: '14 Day/s',
        // principal: '30 Nov 2023',
        // dealdate: 'OTC',
        // valuedate: '10,00,00,000.00',
        // maturitydate:'30 Nov 2023',
        // interestrate:'18.3%',
        // dealername: 'Approved',
        // action:<i class="ri-more-2-fill"></i>,
        // },
     
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
      prop: 'settlementdate',
      title: 'Settlement Date'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'tenor',
      title: 'Tenor (Day/s)'
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
        prop: 'counterparty',
        title: 'Counter Party'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'dealmethod',
        title: 'Deal Method'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'iinterestrate',
        title: 'Iinterest Rate (%)'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'dealamount',
        title: 'Deal Amount'
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
        prop: 'settlementstatus',
        title: 'Settlement Status'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'rollovermark',
        title: 'Rollover Mark'
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

export default DealRolloverTable;
