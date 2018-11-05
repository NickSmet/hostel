import React from 'react';
import Button from './../shared/btn';

import { Alert } from 'react-bootstrap';
import axios from 'axios';

import { connect } from 'react-redux';

class TransferForm extends React.Component {

    state = {
        place: 'Гостиница',
        dateSt: '',
        time: '',
        address: '',
        name: '',
        people: '',
        msg: '',
        email: '',
        phone: '',
        canSend: false,
        showAlert: false,
        showOk: false
    };

    handleInput = (field, text) => {
        this.setState({ showAlert: false, showOk: false });
        this.setState({ [field]: text });
    }

    handleSubmit = () => {
        if(this.state.email === '') {
            this.setState({ canSend: false, showAlert: true });
            setInterval(() => {
                this.setState({ showAlert: false })
            }, 3000);
        } else {
            axios.post('http://dev.centeral.ru/php/sendMessageTransfer.php', {
                place: this.state.place,
                dateSt: this.state.dateSt,
                time: this.state.time,
                address: this.state.address,
                name: this.state.name,
                people: this.state.people,
                msg: this.state.msg,
                email: this.state.email,
                phone: this.state.phone,
            });
            this.setState({ showOk: true });
        }
    }

    render() {
        const lang = this.props.lang;
        return (
            <div className='form'>
                <label>
                        { lang.place.label }
                        <select data-field='place' name="place" id="place"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        >
                            <option value={ lang.place.hotel }>{ lang.place.hotel }</option>
                            <option value={ lang.place.hostel }>{ lang.place.hostel }</option>
                        </select>
                    </label>
                    <label>
                        { lang.dateStart }
                        <input data-field='dateSt' type="date" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        { lang.time }
                        <input data-field='time' type="time" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        { lang.address }
                        <textarea data-field='address' name="consumer" id="consumer" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                    </label>
                    <label>
                        { lang.name }
                        <textarea data-field='name' name="consumer" id="consumer" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                    </label>
                    <label>
                        { lang.people }
                        <input data-field='people' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        { lang.comments }
                        <textarea data-field='msg' name="consumer" id="consumer" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                    </label>
                    <label>
                        { lang.email } *
                        <input data-field='email' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        { lang.phone }
                        <input data-field='phone' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <div onClick={ () => this.handleSubmit() }>
                        <Button additionalClass={'form-btn'} title={ this.props.send }/>
                    </div>
                    {
                        this.props.language === 'ru' ?
                        (
                            <div>
                                <Alert bsStyle="danger" className={ this.state.showAlert ? 'form-alert active' : 'form-alert' }>
                                Необходимо заполнить поля обозначенные "*"
                                </Alert>
                                <Alert bsStyle="success" className={ this.state.showOk ? 'form-alert active' : 'form-alert' }>
                                    Отправлено
                                </Alert>
                            </div>
                        )
                        :
                        (
                            <div>
                                <Alert bsStyle="danger" className={ this.state.showAlert ? 'form-alert active' : 'form-alert' }>
                                    Please, fill the fields indicated by "*"
                                </Alert>
                                <Alert bsStyle="success" className={ this.state.showOk ? 'form-alert active' : 'form-alert' }>
                                    Success
                                </Alert>
                            </div>
                        )
                    }
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        lang: state[state.lang].interface.forms,
        language: state.lang,
        book: state[state.lang].interface.book,
        send: state[state.lang].interface.send,
        transfer: state[state.lang].interface.transfer
    }
}

export default connect(mapStateToProps)(TransferForm);
