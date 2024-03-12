import React from 'react';
// import Settlement from '../components/MoneyMarketDeal/Settlement';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import BookType from '../components/MoneyMarketDeal/BookType';



const MoneyMarketDeal = () => {
    return (
        <section className='money__market__deal prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing / ' subtitle2='Create Order /' subtitle3='Money Market Deal' title='Money Market Deal'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <BookType />
                    </div>
                    {/* <div className='col-md-5'>
                        <Settlement />
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default MoneyMarketDeal;
