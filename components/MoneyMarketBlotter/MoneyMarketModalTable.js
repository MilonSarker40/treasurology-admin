import React from 'react';
import Table from 'react-bootstrap/Table';
import Classes from '../../styles/moneyblotter.module.css';

function MoneyMarketModalTable() {
  return (
    <div className={`${Classes.deal__buy__table}`}>
      <Table>
      <thead>
          <tr>
              <th>Counter Party</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Payment Mode</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Mr. Shahazadul</td>
              <td>Fund Received</td>
              <td>100000</td>
              <td>RTGS</td>
          </tr>
      </tbody>
    </Table>
  </div>
  );
}

export default MoneyMarketModalTable;