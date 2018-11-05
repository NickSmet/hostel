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

        const lang = this.props.lang;

        return (
            <div className='group'>
                <div className='container'>
                    <div className='group-title'>
                        <h1>{ lang.title }</h1>
                        <div>{ lang.text }</div>
                    </div>
                    <div className="group-wrapper">
                        <div className="group-left">
                            <Info lang={ lang.info } />
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
        contacts: state[state.lang].contacts,
        lang: state[state.lang].interface.group
    }
}

export default connect(mapStateToProps)(Group);