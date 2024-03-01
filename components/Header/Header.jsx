import React,{useState} from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'reactstrap';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import NetworkIcon from '../../public/images/network-icon.png';
import Classes from '../../styles/header.module.css';
import Link from 'next/link';
import Avator from '../../public/images/avator.png';

const Header = ({props}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
      const [dropdownOpen, setDropdownOpen] = useState(false);
      const toggle = () => setDropdownOpen((prevState) => !prevState);
  
      const handleClick=()=>{
        localStorage.clear();
        // window.location.href = '/login';
        window.location.reload();
      }

    return (
        <header className={`${Classes.header}`}>
            <div className='container-fluid'>
                <Row>
                    <Col lg='12'>
                        <div className={`${Classes.header__innr}`}>
                            <div className={`${Classes.header__lft}`}>
                                <span><Image src={NetworkIcon} alt='Network Icon' /></span>
                                <strong>New Bank</strong>
                            </div>
                            <div className={`${Classes.header__rgt}`}>
                                <div className={`${Classes.header__setting__bar}`}>
                                    <ul className='reset-list clearfix'>
                                        <li>
                                            <Link href='#'><i class="ri-messenger-line"></i></Link>
                                        </li>
                                        <li>
                                            <Link href='notifications'><i class="ri-notification-2-line"></i></Link>
                                        </li>
                                        <li>
                                            <Link href='#'><i class="ri-moon-line"></i></Link>
                                        </li>
                                        <li>
                                            <Link href='#'><i class="ri-settings-2-line"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='avator'>
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
                                        <DropdownToggle caret size="lg">
                                            <Image src={Avator} width='70px' height='70px' alt='' />
                                            <strong>Adam<i class="ri-arrow-down-s-line"></i></strong>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {/* <DropdownItem href='/login'><i class="ri-login-circle-line"></i>Login</DropdownItem> */}
                                            <DropdownItem onClick={handleClick} href='login'><i class="ri-account-circle-fill"></i>Login</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default Header;
