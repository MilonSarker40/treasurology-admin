import React from 'react';
import Table from 'react-bootstrap/Table';
import InFlowTableData from './InFlowTableData';
import Classes from '../../styles/moneyblotter.module.css';





const OutFlowTable = () => {
    return (
        <div className={`${Classes.in__flow__table}`}>
            <Table>
                <thead>
                    <tr>
                        <th>Particular</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>MM Deals</th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>1. Call</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>2. Notice</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>3. Term</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>FX Deal</th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>FX Cash</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>FX Spot</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>FX Forward</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>SWAP</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Customer RTGS</th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>Robi</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>GP</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Mrinmoy K</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Mrinmoy K</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Customer BB Cheque</th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>City Group</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Jamuna Group</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Tapash</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>BEFTN</th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>City Group</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Jamuna Group</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Tapash</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>BACH</th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>High Value</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Regular Value</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>High Value Return</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>Regular Value Return</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Others</th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>Others 1</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{borderBottom:'0',color:'#EB5757',fontWeight:'600'}}>Total Out Flow</td>
                        <td style={{borderBottom:'0',color:'#EB5757',fontWeight:'600'}}>99,000,000,0000.00</td>
                    </tr>
                </tbody>
             </Table>
        </div>
    );
}

export default OutFlowTable;
