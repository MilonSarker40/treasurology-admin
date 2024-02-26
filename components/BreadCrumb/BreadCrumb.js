import Link from 'next/link';
import React from 'react';

const BreadCrumb = ({title,subtitle,subtitle1,subtitle2,subtitle3}) => {
    return (
        <div className='breadcrumb__wrap'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className='reset-list clearfix'>
                            {/* <li>{title}</li> */}
                            <li>{subtitle}</li>
                            <li>{subtitle1}</li>
                            <li>{subtitle2}</li>
                            <li>{subtitle3}</li>
                        </ul>
                        <h5>{title}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
