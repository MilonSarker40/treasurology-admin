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

const AllContactsTable = () => {


    const [data,setData]=useState([]);
  
    const bodyData=[
          {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
         },
         {
            marketparticipant: 'Sonali Banl Limited',
            actiongroup: 'Bank Office Maker',
            name:'Md. Kamal Hossain Murad',
            email:'kamal99hossain@gmail.com',
            phone:'01740488507',
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
      prop: 'marketparticipant',
      title: 'Market Participant'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'actiongroup',
      title: 'Action Group'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'name',
      title: 'Name'
      },
      {
        isFilterable: false,
        isSortable: true,
        prop: 'email',
        title: 'Email'
      },
      {
        isFilterable: false,
        isSortable: true,
        prop: 'phone',
        title: 'Phone'
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

export default AllContactsTable;
