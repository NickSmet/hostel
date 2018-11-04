import React from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

import Button from './../shared/btn';
class ContactsForm extends React.Component {

    state = {
        name: '',
        email: '',
        msg: '',
        canSend: false,
        showAlert: false,
        showOk: false
    };

    handleInput = (field, text) => {
        this.setState({ showAlert: false, showOk: false });
        this.setState({ [field]: text });
    }

    handleSubmit = () => {
        if(this.state.name === '' || this.state.email === '') {
            this.setState({ canSend: false, showAlert: true });
            setInterval(() => {
                this.setState({ showAlert: false })
            }, 3000);
        } else {
            axios.post('http://dev.centeral.ru/php/sendMessage.php', {
                name: this.state.name,
                email: this.state.email,
                text: this.state.msg
            });
            this.setState({ showOk: true });
        }
    }

    render() {
        return (
            <div className='contacts-form-wrapper'>
                <h2>Форма связи</h2>
                <label>
                    Ваше имя *
                        <input data-field='name' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                </label>
                <label>
                    Ваш Email *
                        <input data-field='email' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                </label>
                <label>
                    Ваше сообщение
                        <textarea data-field='msg' name="wishes" id="wishes" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                </label>
                <div onClick={ () => this.handleSubmit() } >
                    <Button additionalClass={'contacts-form'} title='ОТПРАВИТЬ' />
                </div>
                
                <Alert bsStyle="danger" className={ this.state.showAlert ? 'form-alert active' : 'form-alert' }>
                    Необходимо заполнить поля обозначенные "*"
                </Alert>
                <Alert bsStyle="success" className={ this.state.showOk ? 'form-alert active' : 'form-alert' }>
                    Отправлено
                </Alert>
            </div>
        );
    }
    
}

export default ContactsForm;