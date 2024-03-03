import React from 'react';

const DailyDealerLimitTable = () => {
    return (
        <div className='daily__dealer__limit__table'>
              <table className='table'>
                <thead>
                    <tr>
                        <th style={{background:'#fff',width:'14%'}}></th>
                        <th style={{background:'#41B8D6',width:'43%',color:'#fff',textAlign:'center'}}>Lending</th>
                        <th style={{background:'#2C8BB9',width:'43%',color:'#fff',textAlign:'center'}}>Borrowing</th>
                    </tr>
                </thead>
              </table>
              <table className='table'>
                <thead>
                    <tr>
                        <th style={{width:'14%'}}>Dealer</th>
                        <th style={{background:'#e0e0e0'}}>Limit Allocated</th>
                        <th style={{background:'#e0e0e0'}}>Limit Utilized</th>
                        <th style={{background:'#e0e0e0'}}>Unutilized</th>
                        <th style={{background:'#ededed'}}>Limit Allocated</th>
                        <th style={{background:'#ededed'}}>Limit Utilized</th>
                        <th style={{background:'#ededed'}}>Unutilized</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mithun Roy</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                    </tr>
                    <tr>
                        <td>Mrinmoy Krishna</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                    </tr>
                    <tr>
                        <td>Bayzid Islam</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                    </tr>
                    <tr>
                        <td>Murad Islam</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                        <td>50,00,00,000.00</td>
                        <td>0</td>
                        <td>50,00,00,000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DailyDealerLimitTable;
