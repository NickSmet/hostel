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
        const lang = this.props.lang.forms.feedbackForm;
        return (
            <div className='contacts-form-wrapper'>
                <h2>{ lang.title }</h2>
                <label>
                    { lang.name } *
                        <input data-field='name' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                </label>
                <label>
                    { lang.email } *
                        <input data-field='email' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                </label>
                <label>
                    { lang.message }
                        <textarea data-field='msg' name="wishes" id="wishes" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                </label>
                <div onClick={ () => this.handleSubmit() } >
                    <Button additionalClass={'contacts-form'} title={ this.props.lang.send } />
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

export default ContactsForm;