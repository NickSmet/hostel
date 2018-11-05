import React from 'react';
import './transfer.css';
import TransferForm from './transfer-form';
import { connect } from 'react-redux';

const Transfer = ({ transfer }) => {
    return (
        <div className='container'>
            <div className='transfer-title'>
                <h2>{ transfer.title }</h2>
                <h3>{ transfer.text }</h3>
            </div>
            <div className='transfer-from'>
                <TransferForm />
            </div>
        </div>
        
    );
}

const mapStateToProps = state => {
    return {
        transfer: state[state.lang].interface.transfer
    }
}

export default connect(mapStateToProps)(Transfer);
