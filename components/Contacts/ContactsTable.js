import React,{useEffect, useState} from 'react';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  paginationOptionsProps,
  TableBody,
  TableHeader,
  BulkCheckboxControl
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from '../Contacts/contacts.module.css';


const ContactsTable = () => {

  const [data,setData]=useState([]);
  
  const bodyData=[
    {
      market:'Ecobank',
      mail:'willie.jennings@example.com',
      designation: 'Manager',
      name: 'Sazzad Islam Shohag',
      id: 'ytt7777777',
      status: 'Eidt',
      nambuer: '+8801 740488507',
      lan:'+8801 740488507',
      favorite:'Yes',
      action:<i class="ri-more-2-fill"></i>,
      },
      {
      market:'Ecobank',
      mail:'debra.holt@example.com',
      designation: 'Medical Assistant',
      name: 'Shohag Ali',
      id: 'ytt7777777',
      status: 'Eidt',
      nambuer: '+8801 740488507',
      lan:'+8801 740488507',
      favorite:'Yes',
      action:<i class="ri-more-2-fill"></i>,
      },
      {
      market:'Ecobank',
      mail:'nathan.roberts@example.com',
      designation: 'Nursing Assistant',
      name: 'Sazzad Islam Shohag',
      id: 'ytt7777777',
      status: 'Eidt',
      nambuer: '+8801 740488507',
      lan:'+8801 740488507',
      favorite:'Yes',
      action:<i class="ri-more-2-fill"></i>,
      },
      {
      market:'Ecobank',
      mail:'sara.cruz@example.com',
      designation: 'Dog Trainer',
      name: 'Shohag Ali',
      id: 'ytt7777777',
      status: 'Eidt',
      nambuer: '+8801 740488507',
      lan:'+8801 740488507',
      favorite:'Yes',
      action:<i class="ri-more-2-fill"></i>,
      },
      {
      market:'Ecobank',
      mail:'deanna.curtis@example.com',
      designation: 'Web Designer',
      name: 'Shohag Ali',
      id: 'ytt7777777',
      status: 'Eidt',
      nambuer: '+8801 740488507',
      lan:'+8801 740488507',
      favorite:'Yes',
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
      prop: 'market',
      title: 'Market Participant'
    },
    {
    isFilterable: true,
    isSortable: true,
    prop: 'name',
    title: 'Contact Name'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'mail',
      title: 'Contact Mail'
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
    prop: 'nambuer',
    title: 'Mobile'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'lan',
      title: 'Lan'
      },
    {
    isFilterable: true,
    isSortable: false,
    prop: 'designation',
    title: 'Designation'
    },
    {
    isFilterable: false,
    isSortable: true,
    prop: 'favorite',
    title: 'Favorite'
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
            sortProps={{
                sortValueObj: {
                date: function noRefCheck(){}
                }
            }}
            >
            <table className='table'>
                <TableHeader />
                <TableBody />
            </table>
            <Row>
              <Col xs={12} className="mt-2">
                <BulkCheckboxControl />
              </Col>
            </Row>
          </DatatableWrapper>
      </div>
    );
}

export default ContactsTable;
