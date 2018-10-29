import React from 'react';
import './group.css';
import { connect } from 'react-redux';

import Info from './group-info';
import GroupContacts from '../shared/contacts';
import GroupForm from './group-form';

class Group extends React.Component {
    render() {

        const contacts = {
            ...this.props.contacts,
            email: 'groups@centeral.ru'
        };

        return (
            <div className='group'>
                <div className='container'>
                    <div className='group-title'>
                        <h1>Групповое бронирование</h1>
                        <div>Форма заявки для группового бронирования</div>
                    </div>
                    <div className="group-wrapper">
                        <div className="group-left">
                            <Info />
                            <GroupContacts component='group' contacts={ contacts } />
                        </div>
                        <div className="group-right">
                            <GroupForm />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.ru.contacts
    }
}

export default connect(mapStateToProps)(Group);