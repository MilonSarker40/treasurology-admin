import React from 'react';
import {MarketMonitorData} from '../Dashboard/DashboardTableData';
import Table from 'react-bootstrap/Table';
import Classes from '../Dashboard/dashboard.module.css';

const MarketMonitor = () => {
    return (
        <div className={`${Classes.incomming__order__table}`}>
            <Table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Tenor (Days)</th>
                        <th>WAR (%)</th>
                        <th>Amount</th>
                        <th>No of deals</th>
                    </tr>
                </thead>
                <tbody>
                    {MarketMonitorData.map((items,index)=>(
                            <tr>
                                <td>{items.slN}</td>
                                <td>{items.tenorD}</td>
                                <td>{items.warP}</td>
                                <td>{items.amount}</td>
                                <td>{items.deal}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default MarketMonitor;
