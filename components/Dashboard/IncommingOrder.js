import React from 'react';
import Table from 'react-bootstrap/Table';
// import IncommingOrderData from './DashboardTableData';
import { IncommingOrderData } from './DashboardTableData';
import Classes from '../Dashboard/dashboard.module.css';

const IncommingOrder = () => {
    return (
        <div className={`${Classes.incomming__order__table}`}>
            <Table>
                <thead>
                    <tr>
                        <th>Lend</th>
                        <th>Lend</th>
                        <th>Borrow</th>
                    </tr>
                </thead>
                <tbody>
                    {IncommingOrderData.map((items,index)=>(
                            <tr>
                                <td>{items.lend}</td>
                                <td>{items.lendN}</td>
                                <td>{items.borrow}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default IncommingOrder;
