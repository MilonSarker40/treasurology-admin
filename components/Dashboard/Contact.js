import React from 'react';
import Table from 'react-bootstrap/Table';
import {ContactData} from '../Dashboard/DashboardTableData';
import Classes from '../Dashboard/dashboard.module.css';

const Contact = () => {
    return (
        <div className={`${Classes.notice__board__table}`}>
            <Table>
                <tbody>
                    {
                        ContactData.map((item,index)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td><i class={item.icon}></i></td>
                                <td><i class={item.icon1}></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Contact;
