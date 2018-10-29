import React from 'react';

const Contacts = ({ component, contacts }) => {
    return (
        <div className={`${component}-contacts`}>
            <div className={`${component}-contacts-item`}>
                <i className='hillter-icon-location'></i>
                <a href="#add">{contacts.address}</a>
            </div>
            <div className={`${component}-contacts-item`}>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.phone }>{contacts.phone}</a>
            </div>
            <div className={`${component}-contacts-item`}>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.sales_phone }>{contacts.sales_phone}</a>
            </div>
            <div className={`${component}-contacts-item`}>
                <i className='fa fa-envelope-o'></i>
                <a href={ 'mailto:' + contacts.email }>{contacts.email}</a>
            </div>
        </div>
    );
}

export default Contacts;