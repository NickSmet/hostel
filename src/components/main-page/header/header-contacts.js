import React from 'react';
import { connect } from 'react-redux';

const HeaderContacts = ({ contacts, sale, phoneName }) => {
    return (
        <div>
            <span className='header-top__contacts-item mobile-hide'>
                <i className='hillter-icon-location'></i>
                <a href="#add">{contacts.address}</a>
            </span>
            <span className='header-top__contacts-item desktop-hide'>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.phone }>{phoneName}</a>
            </span>
            <span className='header-top__contacts-item desktop-hide'>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.sales_phone }>{ sale }</a>
            </span>
            <span className='header-top__contacts-item mobile-hide'>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.phone }>{contacts.phone}</a>
            </span>
            <span className='header-top__contacts-item mobile-hide'>
                <i className='hillter-icon-phone'></i>
                <a href={ 'tel:' + contacts.sales_phone }>{ sale }: {contacts.sales_phone}</a>
            </span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
         sale: state[state.lang].interface.sale,
         phoneName: state[state.lang].interface.phoneName,
    }
 }
 
export default connect(mapStateToProps)(HeaderContacts);
