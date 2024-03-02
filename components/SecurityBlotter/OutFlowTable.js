import React from 'react';
import Table from 'react-bootstrap/Table';
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
                        <th>BB Bill <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>14 Days</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Treasury Bill <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>91 Days</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>82 Days</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>364 Days</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Treasury Bond <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>2 Year</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>5 Year</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>10 Year</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>15 Year</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td>20 Year</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Treasury Sukuk <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
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
                        <th>Perpetual  Bond <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>City Bank</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Subordinate  Bond <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>Dhaka Bank </td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Corporate Bond <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>City Group</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Zero Coupon   Bond <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>United Securities</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <th>Others <i className="ri-add-box-fill" style={{color:'#EB5757'}}></i></th>
                        <th>100,000,000,00000.00</th>
                    </tr>
                    <tr>
                        <td>Others 1</td>
                        <td>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{borderBottom:'0',color:'#EB5757',fontWeight:'600'}}>Total In Flow</td>
                        <td style={{borderBottom:'0',color:'#EB5757',fontWeight:'600'}}>99,000,000,0000.00</td>
                    </tr>
                </tbody>
             </Table>
        </div>
    );
}

export default OutFlowTable;
