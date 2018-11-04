import React from 'react';
import Button from './../shared/btn';

import { Alert } from 'react-bootstrap';
import axios from 'axios';

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
        return (
            <div className='form'>
                <label>
                        Место размещения
                        <select data-field='place' name="place" id="place"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        >
                            <option value="Гостиница">Гостиница</option>
                            <option value="Хостел">Хостел</option>
                        </select>
                    </label>
                    <label>
                        Дата прибытия
                        <input data-field='dateSt' type="date" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        Время прибытия
                        <input data-field='time' type="time" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        Место прибытия
                        <textarea data-field='address' name="consumer" id="consumer" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                    </label>
                    <label>
                        Организация или ФИО заказчика
                        <textarea data-field='name' name="consumer" id="consumer" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                    </label>
                    <label>
                        Количество человек
                        <input data-field='people' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        Комментарии
                        <textarea data-field='msg' name="consumer" id="consumer" cols="30" rows="5"
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        ></textarea>
                    </label>
                    <label>
                        Электронная почта для связи *
                        <input data-field='email' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <label>
                        Телефон для связи
                        <input data-field='phone' type="text" 
                            onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                        />
                    </label>
                    <div onClick={ () => this.handleSubmit() }>
                        <Button additionalClass={'form-btn'} title='ОТПРАВИТЬ ЗАПРОС'/>
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

export default TransferForm;