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

const ReverseRepoDealTable = () => {

    const [data,setData]=useState([]);
  
    const bodyData=[
        {
        id: '1',
        counterpartye: 'Sonali Bank',
        facevalue: '10,00,00,000.00',
        bookvalue: '10,00,00,000.00',
        }, 
        {
        id: '2',
        counterpartye: 'Sonali Bank',
        facevalue: '10,00,00,000.00',
        bookvalue: '10,00,00,000.00',
        }, 
        {
        id: '3',
        counterpartye: 'Sonali Bank',
        facevalue: '10,00,00,000.00',
        bookvalue: '10,00,00,000.00',
        },
        {
        id: '4',
        counterpartye: 'Sonali Bank',
        facevalue: '10,00,00,000.00',
        bookvalue: '10,00,00,000.00',
        },
    ]
   const headerData=[
     {
        cellProps: {
            style: function noRefCheck(){}
        },
        isFilterable: false,
        isSortable: true,
        prop: 'id',
        title: '#'
     },
      {
        prop: 'checkbox',
        checkbox: { idProp: 'name', className: 'table-checkbox' },
        alignment: { horizontal: 'center' }
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'counterpartye',
      title: 'Counter Party'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'facevalue',
      title: 'Face Value'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'bookvalue',
      title: 'Book Value'
      },
   ]
  
   
   useEffect(() => {
    fetch("url")
      .then((res) => res.json())
      .then((data) => setData(data));
    setData(bodyData);
  },[])

    return (
        <div className='reverse__repo__table'>
            <h5>Securities Details</h5>
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
        </div>
    );
}

export default ReverseRepoDealTable;
