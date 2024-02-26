import React from 'react';
import Table from 'react-bootstrap/Table';
import {NoticeBoardData} from '../Dashboard/DashboardTableData';
import Classes from '../Dashboard/dashboard.module.css';

const NoticeBoard = () => {
    return (
        <div className={`${Classes.notice__board__table}`}>
            <Table>
                <tbody>
                    {
                        NoticeBoardData.map((item,index)=>(
                            <tr>
                                <td>{item.NText}</td>
                                <td><i class={item.icon}></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default NoticeBoard;
