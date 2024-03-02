import React from 'react';
import Table from 'react-bootstrap/Table';
import Classes from '../../styles/moneyblotter.module.css';

const IndicatorTable = () => {
    return (
        <div className={`${Classes.indicator__table}`}>
            <Table>
                <thead>
                    <tr>
                        <th>Liquidity Indicator</th>
                        <th>Required</th>
                        <th>Maintain</th>
                        <th>GAP</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>1. Daily - CRR</td>
                        <td>900.00<span>1.5%</span></td>
                        <td>1,000.00<span style={{background:'#27ae60'}}>1.6%</span></td>
                        <td>100<span>0.1%</span></td>
                     </tr>
                     <tr>
                        <td>2. Bi weekly - CRR</td>
                        <td>1,100.00<span>2.0%</span></td>
                        <td>1,100.00<span>2.1%</span></td>
                        <td>200<span>0.1%</span></td>
                     </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default IndicatorTable;
