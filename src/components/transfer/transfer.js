import React from 'react';
import './transfer.css';
import TransferForm from './transfer-form';

const Transfer = () => {
    return (
        <div className='container'>
            <div className='transfer-title'>
                <h2>Заказ трансфера</h2>
                <h3>Пожалуйста, заполните форму, и мы свяжемся с Вами в ближайшее время.</h3>
            </div>
            <div className='transfer-from'>
                <TransferForm />
            </div>
        </div>
        
    );
}

export default Transfer;