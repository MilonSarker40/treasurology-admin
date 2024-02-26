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

const MessagingHistoryTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
        action:<i class="ri-more-2-fill"></i>,
        },
        {
        counterpartye: 'Ecobank',
        starttime: '2022-11-30 02:55 PM',
        endtime: '2022-11-30 02:55 PM',
        id: '16658144568612_54814484_6471264494',
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
      prop: 'counterpartye',
      title: 'Counterparty Dealer'
      },
      {
       cellProps: {
            style: function noRefCheck(){}
        },
        isFilterable: false,
        isSortable: true,
        prop: 'id',
        title: 'Season ID'
        },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'starttime',
      title: 'Start Time'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'endtime',
      title: 'End Time'
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

export default MessagingHistoryTable;
