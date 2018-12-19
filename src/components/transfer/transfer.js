import React from 'react';
import './transfer.css';
import TransferForm from './transfer-form';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
const Transfer = ({ transfer }) => {
    ReactGA.initialize('UA-131048082-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
