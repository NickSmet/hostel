import React from 'react';
import { connect } from 'react-redux';

const HeaderContacts = ({ contacts, sale }) => {
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
                <a href={ 'tel:' + contacts.sales_phone }>{ sale }: {contacts.sales_phone}</a>
            </span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
         sale: state[state.lang].interface.sale
    }
 }
 
export default connect(mapStateToProps)(HeaderContacts);
