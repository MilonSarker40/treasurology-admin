import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import IncomingOrderRadio from '../components/ReverseRepoDeal/IncomingOrderRadio';
import CategoryRadio from '../components/ReverseRepoDeal/CategoryRadio';
import ReverseRepoDealSelect from '../components/ReverseRepoDeal/ReverseRepoDealSelect';
import ReverseRepoDealForm from '../components/ReverseRepoDeal/ReverseRepoDealForm';
import ReverseRepoDealForm1 from '../components/ReverseRepoDeal/ReverseRepoDealForm1';
import ReverseRepoDealTable from '../components/ReverseRepoDeal/ReverseRepoDealTable';

const ReverseRepoDeal = () => {
    return (
        <section className='reverse__repo__deal__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Securities Deal /' subtitle3='Repo Reverse Repo Deal' title='Repo Reverse Repo Deal' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <IncomingOrderRadio />
                    </div>
                    <div className='col-md-4'>
                        <CategoryRadio />
                    </div>
                    <div className='col-md-4'></div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <ReverseRepoDealSelect />
                    </div>
                    <div className='col-md-4'>
                        <ReverseRepoDealForm />
                    </div>
                    <div className='col-md-4'>
                        <ReverseRepoDealForm1 />
                        <ReverseRepoDealTable />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReverseRepoDeal;
