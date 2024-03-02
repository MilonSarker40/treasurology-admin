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

const RevisionRequestTable = () => {

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
      prop: 'instructingparty',
      title: 'Instructing Party'
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
        prop: 'reason',
        title: 'Reason'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'iniatedby',
        title: 'Iniated By'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'acceptancestatus',
        title: 'Acceptance Status'
      },
      {
        isFilterable: true,
        isSortable: false,
        prop: 'acceptedby',
        title: 'Accepted By'
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

export default RevisionRequestTable;
