import React from 'react';
import Table from 'react-bootstrap/Table';
import Classes from '../../styles/moneyblotter.module.css';

const FxBlotterTable = () => {
    return (
        <div className={`${Classes.fx__blotter__table}`}>
          <Table>
            <thead>
                <tr>
                    <th>Particular</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Opening Balance</th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <th>Net MM Deals <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <td>Call - NRB</td>
                    <td style={{color:'#EB5757'}}>(100,000,000.00)</td>
                </tr>
                <tr>
                    <td>Notice - BRAC</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>Term</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <th>Net FX Deal <i className="ri-add-box-fill"></i></th>
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
                    <th>Net Customer RTGS <i className="ri-add-box-fill"></i></th>
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
                    <th>Net Customer FDD <i className="ri-add-box-fill"></i></th>
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
                    <th>Payments <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <td>Sight LC</td>
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
                    <td>Deferred LC</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>Tapash</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>Jamuna Group</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>UPAS</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <th>Remittance <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <td>Trans Fast</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>TK Group - Other Bank</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <th>Others <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <td>Others 1</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <th>Opening <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <th>Total Out Flow <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <th>Total In Flow <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <th></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <th>Fund Transfer <i className="ri-add-box-fill"></i></th>
                    <th>100,000,000,00000.00</th>
                </tr>
                <tr>
                    <td>ACU</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>ICICI Mumbai</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>AB Bank Mumbai</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>NOSTRO Transfer</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>SCB NY</td>
                    <td>100,000,000,000.00</td>
                </tr>
                <tr>
                    <td>CITI NA NY</td>
                    <td>100,000,000,000.00</td>
                </tr>
            </tbody>
            </Table>
    </div>
    );
}

export default FxBlotterTable;
