import React from 'react';

const AverageDealBorrowingTable = () => {
    return (
        <div className='average__lending__table'>
            <table className='table' style={{marginBottom:'0'}}>
                <thead>
                    <tr>
                        <th style={{background:'#2F80ED',padding:'20px 20px',textAlign:'center',color:'#fff'}}>Lending</th>
                    </tr>
                </thead>
            </table>
            <table className='table' style={{marginBottom:'0'}}>
            <thead>
                    <tr>
                        <th style={{width:'11%'}}></th>
                        <th style={{background:'#E0E0E0'}}>Overnight</th>
                        <th>Short Notice</th>
                        <th style={{background:'#E0E0E0'}}>Term</th>
                        <th>SWAP</th>
                        <th style={{background:'#E0E0E0'}}>T-Bill / T-Bond</th>
                        <th>Other Investment</th>
                        <th style={{background:'#ECECEC',width:'11%'}}></th>
                    </tr>
                </thead>
            </table>
            <table className='table' style={{marginBottom:'0'}}>
                <thead>
                    <tr>
                        <th style={{width:'11%'}}>Date</th>
                        <th style={{background:'#ECECEC'}}>
                            <td>Amount</td>
                            <td>WAR</td>
                        </th>
                        <th style={{background:'#E0E0E0'}}>
                            <td>Amount</td>
                            <td>WAR</td>
                        </th>
                        <th style={{background:'#ECECEC'}}>
                            <td>Amount</td>
                            <td>WAR</td>
                        </th>
                        <th style={{background:'#E0E0E0'}}>
                            <td>Amount</td>
                            <td>WAR</td>
                        </th>
                        <th style={{background:'#ECECEC'}}>
                            <td>Amount</td>
                            <td>WAR</td>
                        </th>
                        <th style={{background:'#E0E0E0'}}>
                            <td>Amount</td>
                            <td>WAR</td>
                        </th>
                        <th style={{background:'#ECECEC',width:'11%'}}>Total</th>
                    </tr>
                </thead>
            </table>
            <table className='table table-colum'>
                <tbody>
                    <tr>
                        <td style={{width:'11%'}}>01 Dec 2023</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td style={{width:'11%'}}>50,00,00,000</td>
                    </tr>
                    <tr>
                        <td style={{width:'11%'}}>01 Dec 2023</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td style={{width:'11%'}}>50,00,00,000</td>
                    </tr>
                    <tr>
                        <td style={{width:'11%'}}>01 Dec 2023</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td>50,00,00,000</td>
                        <td>10.00%</td>
                        <td style={{width:'11%'}}>50,00,00,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AverageDealBorrowingTable;
