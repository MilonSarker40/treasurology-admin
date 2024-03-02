import React from 'react';
import Table from 'react-bootstrap/Table';
import Classes from '../../styles/moneyblotter.module.css';

const DealBuyTable = () => {
    return (
        <div className={`${Classes.deal__buy__table}`}>
           <Table>
            <thead>
                <tr>
                    <th>SL</th>
                    <th>Counter-party</th>
                    <th>Deal Type</th>
                    <th>Amount</th>
                    <th>Rate</th>
                    <th>Tenor</th>
                    <th>Maturity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>02</td>
                    <td>Sonali Bank</td>
                    <td>OverNight</td>
                    <td>100000</td>
                    <td>7%</td>
                    <td>22</td>
                    <td>31 Mar 23</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Dhaka Bank</td>
                    <td>Notice</td>
                    <td>100000</td>
                    <td>7%</td>
                    <td>22</td>
                    <td>31 Mar 23</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>UCBL Bank</td>
                    <td>Term</td>
                    <td>100000</td>
                    <td>7%</td>
                    <td>22</td>
                    <td>31 Mar 23</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>AB Bank</td>
                    <td>S/B SWAP</td>
                    <td>100000</td>
                    <td>7%</td>
                    <td>22</td>
                    <td>31 Mar 23</td>
                </tr>
                <tr>
                    <td><strong style={{color:'#12A8EF'}}>Total</strong></td>
                    <td></td>
                    <td></td>
                    <td><strong>100000</strong></td>
                    <td><strong>7%</strong></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
         </Table>
      </div>
    );
}

export default DealBuyTable;
