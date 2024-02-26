import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Form from 'react-bootstrap/Form';
import ProfileImageUpload from '@/components/EditProfile/ProfileImageUpload';

const EditProfile = () => {
    return (
        <section className='edit__profile__sec__wrap prdLR30'>
            <BreadCrumb subtitle='Liquidity Module /' subtitle1='Dealing' subtitle2='Edit Profile' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='edit__profile__wrap'>
                            <h5>Edit Profile</h5>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='book__type'>
                                    <ul className='clearfix reset-list'>
                                        <li>
                                            <label>Market Participant:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>THE BANK LTD.</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Name:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Mohammad</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Employee ID:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>20200136</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Contact Email:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>mailto:Mohammad.nabil@com</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Photo:</label>
                                            <div className='profile__img'>
                                                <ProfileImageUpload />
                                                {/* <Form.Group controlId="formFile" className="mb-3">
                                                    <Form.Label>Default file input example</Form.Label>
                                                    <Form.Control type="file" />
                                                </Form.Group> */}
                                            </div>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='book__type'>
                                    <ul className='clearfix reset-list'>
                                        <li>
                                            <label>Action Group:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Front Office Dealer</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Login Name:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Mohammad</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Designation:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Associate Manager</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Contact Phone:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>+880 123456789</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label>NID:</label>
                                            <div className='select__field book__type__fld'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>46102676</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='change__password__btn'>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditProfile;
