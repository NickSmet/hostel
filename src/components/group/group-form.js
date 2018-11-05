import React from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';

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
                    <input data-field='dateSt'  type="date" onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) } />
                </label>
                <label>
                    { lang.dateEnd }
                    <input data-field='dateEnd' type="date" onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }/>
                </label>
                <label>
                    { lang.name } *
                    <textarea data-field='name' name="consumer" id="consumer" cols="30" rows="5"
                    onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    ></textarea></label>
                <label>
                    { lang.purp.title }
                    <select data-field='purp' name="purpose" id="purpose"
                    onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    >
                        {
                            lang.purp.options.map((item, i) => {
                                return (
                                    <option key={ i } value={ item }>
                                        { item }
                                    </option>
                                )
                            })
                        }
                    </select></label>
                <label>
                    { lang.people }
                    <input data-field='people' type="text" onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    />
                </label>
                <label>
                    { lang.age.title }
                    <select data-field='age' name="age" id="age"
                        onChange={ e => this.handleInput(e.target.dataset.field, e.target.value) }
                    >
                        {
                            lang.age.options.map((item, i) => {
                                return (
                                    <option key={ i } value={ item }>
                                        { item }
                                    </option>
                                )
                            })
                        }
                    </select>
                </label>
                <label>
                    { lang.other }
                    <textarea data-field='msg'  name="wishes" id="wishes" cols="30" rows="5"
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
                  <Button additionalClass={'form-btn'} title={ this.props.book } />  
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
        book: state[state.lang].interface.book
    }
}

export default connect(mapStateToProps)(GroupForm);
