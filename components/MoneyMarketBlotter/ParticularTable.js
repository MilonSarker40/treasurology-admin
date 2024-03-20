import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Classes from '../../styles/moneyblotter.module.css';
import UpdateBtn from './UpdateBtn';

const ParticularTable = () => {

    const [isVisible,setIsVisible]=useState(false);

    const toggleVisibility=()=>{
        setIsVisible(!isVisible);
    }

    return (
        <div className={`${Classes.particular__table}`}>
            <Table style={{marginBottom:'0'}}>
                <tbody>
                    <tr>
                        <td>Particular</td>
                        <td>Amount</td>
                    </tr>
                    <tr onClick={toggleVisibility} style={{cursor:'pointer'}}>
                        <td>+ Balance with BB:   </td>
                        <td style={{color:'#5B5B98'}}>100,000,000,000.00</td>
                    </tr>
                </tbody>
                {isVisible &&
                <tbody>
                    <tr>
                        <td style={{fontWeight:'600',color:'#5B5B98'}}>1. Dhaka</td>
                        <td style={{color:'#5B5B98'}}>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'600',color:'#5B5B98'}}>2. Chittagong</td>
                        <td style={{color:'#5B5B98'}}>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'600',color:'#5B5B98'}}>3. Rajshahi</td>
                        <td style={{color:'#5B5B98'}}>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'600',color:'#5B5B98'}}>4. Barishal</td>
                        <td style={{color:'#5B5B98'}}>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'600',color:'#5B5B98'}}>5. Shylet</td>
                        <td style={{color:'#5B5B98'}}>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'600',color:'#5B5B98'}}>6. Bogra</td>
                        <td style={{color:'#5B5B98'}}>100,000,000,000.00</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right'}}><UpdateBtn /></td>
                        <td></td>
                    </tr>
                </tbody>
                }
            </Table>
        </div>
    );
}

export default ParticularTable;
