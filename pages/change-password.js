import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

const ChangePassword = () => {
    return (
        <section className='change__password__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing /' subtitle2='Change Password'/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='change__password__wrap'>
                            <h5>Change Password</h5>
                            <div className='book__type'>
                                <ul className='clearfix reset-list'>
                                    <li>
                                        <label>Current Password</label>
                                        <div className='input__field book__type__fld'>
                                            <input type='text' placeholder='***********' />
                                        </div>
                                    </li>
                                    <li>
                                        <label>New Password</label>
                                        <div className='input__field book__type__fld'>
                                            <input type='text' placeholder='***********' />
                                        </div>
                                    </li>
                                    <li>
                                        <label>Confirm Password</label>
                                        <div className='input__field book__type__fld'>
                                            <input type='text' placeholder='***********' />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='change__password__btn'>
                                <button>Save</button>
                                <button>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChangePassword;
