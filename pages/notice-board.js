import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import NoticeBoardTable from '../components/NoticeBoard/NoticeBoardTable';
import SearchField from '../components/NoticeBoard/SearchField';

const NoticeBoard = () => {
    return (
        <section className='notice__board__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Others /' subtitle2='Notice Board' title='Notice Board' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                    <div className='messaging__history__date'>
                          <ul className='clearfix reset-list'>
                              <li>
                                <SearchField />
                              </li>
                          </ul>
                    </div>
                    <div className='col-md-12'>
                        <NoticeBoardTable />
                    </div>
                </div>
            </div>
           </div>
        </section>
    );
}

export default NoticeBoard;
