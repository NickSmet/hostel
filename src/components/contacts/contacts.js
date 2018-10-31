import React from 'react';
import { connect } from 'react-redux';

import ContactsBlock from './contacts-contacts';
import Description from './contacts-descr';
import Ways from './contacts-ways';
import Form from './contacts-form';


import './contacts.css';

const Contacts = ({ contacts }) => {
    return (
        <div className='contacts'>
            <div className="container">
                <ContactsBlock contacts={ contacts }/>
                <Description />
                <h3>Как до нас добраться:</h3>
                <Ways />
                <Form />
            </div>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        contacts: state.ru.contacts
    }
}

export default connect(mapStateToProps)(Contacts);
