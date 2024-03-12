import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MoneyMarketModalTable from '../MoneyMarketBlotter/MoneyMarketModalTable';

const InputRefreshBtn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='input__refresh__btn'>
                <button onClick={handleShow}><i class="ri-add-line"></i> Input</button>
                <button><i class="ri-refresh-line"></i> Refresh</button>
            </div>
            <Modal className='money__market__modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <MoneyMarketModalTable />
                </Modal.Body>
            </Modal>
        </>

    );
}

export default InputRefreshBtn;
