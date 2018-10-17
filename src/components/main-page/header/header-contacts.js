import React from 'react';

const HeaderContacts = ({ contacts }) => {
    return (
        <div>
            <span className='header-top__contacts-item'>
                <i className='hillter-icon-location'></i>
                <a href="#add">{contacts.address}</a>
            </span>
            <span className='header-top__contacts-item'>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.phone }>{contacts.phone}</a>
            </span>
            <span className='header-top__contacts-item'>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.sales_phone }>Отдел продаж: {contacts.sales_phone}</a>
            </span>
        </div>
    );
}

export default HeaderContacts;