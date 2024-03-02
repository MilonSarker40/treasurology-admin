import React from 'react';
import Table from 'react-bootstrap/Table';
import Classes from '../MoneyMarketBlotter/moneyblotter.module.css';

const ParticularTable = () => {
    return (
        <div className={`${Classes.particular__table}`}>
            <Table>
                <tbody>
                    <tr>
                        <td>Particular</td>
                        <td>Amount</td>
                    </tr>
                    <tr>
                        <td>+ Balance with BB:   </td>
                        <td>100,000,000,000.00</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ParticularTable;
