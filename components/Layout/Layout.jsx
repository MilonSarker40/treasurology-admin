import React from 'react';
import { Fragment } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => {
    return (
        <Fragment>
            <div className='layout'>
                <Sidebar />
                <div className='main-layout'>
                    <Header />
                    <div className='main-content'>
                        <div>{props.children}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Layout;
