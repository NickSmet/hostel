import React from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

import './../shared/form.css';
import Button from './../shared/btn';

class GroupForm extends React.Component {

    state = {
        place: 'Гостиница',
        dateSt: '',
        dateEnd: '',
        name: '',
        purp: 'Туризм',
        people: '',
        age: 'До 18',
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
        if(this.state.name === '' || this.state.email === '') {
            this.setState({ canSend: false, showAlert: true });
            setInterval(() => {
                this.setState({ showAlert: false })
            }, 3000);
        } else {
            axios.post('http://dev.centeral.ru/php/sendMessageGroup.php', {
                place: this.state.place,
                dateSt: this.state.dateSt,
                dateEnd: this.state.dateEnd,
                name: this.state.name,
                purp: this.state.purp,
                people: this.state.people,
                age: this.state.age,
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
                    Дата заезда
                    <input data-field='dateSt'  type="date" onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) } />
                </label>
                <label>
                    Дата выезда
                    <input data-field='dateEnd' type="date" onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }/>
                </label>
                <label>
                    Организация или ФИО заказчика *
                    <textarea data-field='name' name="consumer" id="consumer" cols="30" rows="5"
                    onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    ></textarea></label>
                <label>
                    Цель поездки
                    <select data-field='purp' name="purpose" id="purpose"
                    onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    >
                        <option value="Туризм">Туризм</option>
                        <option value="Бизнес">Бизнес</option>
                        <option value="Обучение">Обучение</option>
                        <option value="Спорт">Спорт</option>
                        <option value="Иное">Иное</option>
                    </select></label>
                <label>
                    Количество человек в группе
                    <input data-field='people' type="text" onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    />
                </label>
                <label>
                    Возраст участников
                    <select data-field='age' name="age" id="age"
                        onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    >
                        <option value="До 18">До 18</option>
                        <option value="18-25">18-25</option>
                        <option value="Старше 25 лет">Старше 25 лет</option>
                    </select>
                </label>
                <label>
                    Иные требования и пожелания
                    <textarea data-field='msg'  name="wishes" id="wishes" cols="30" rows="5"
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
                  <Button additionalClass={'form-btn'} title='ЗАБРОНИРОВАТЬ' />  
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

export default GroupForm;