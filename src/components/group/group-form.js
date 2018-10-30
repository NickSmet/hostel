import React from 'react';
import './../shared/form.css';
import Button from './../shared/btn';

class GroupForm extends React.Component {
    render() {
        return (
            <div className='form'>
                <label>
                    Место размещения
                    <select name="place" id="place">
                        <option value="Гостиница">Гостиница</option>
                        <option value="Хостел">Хостел</option>
                    </select>
                </label>
                <label>
                    Дата заезда
                    <input type="date" />
                </label>
                <label>
                    Дата выезда
                    <input type="date" />
                </label>
                <label>
                    Организация или ФИО заказчика *
                    <textarea name="consumer" id="consumer" cols="30" rows="5"></textarea></label>
                <label>
                    Цель поездки
                    <select name="purpose" id="purpose">
                        <option value="Туризм">Туризм</option>
                        <option value="Бизнес">Бизнес</option>
                        <option value="Обучение">Обучение</option>
                        <option value="Спорт">Спорт</option>
                        <option value="Иное">Иное</option>
                    </select></label>
                <label>
                    Количество человек в группе
                    <input type="text" />
                </label>
                <label>
                    Возраст участников
                    <select name="age" id="age">
                        <option value="До 18">До 18</option>
                        <option value="18-25">18-25</option>
                        <option value="Старше 25 лет">Старше 25 лет</option>
                    </select>
                </label>
                <label>
                    Иные требования и пожелания
                    <textarea name="wishes" id="wishes" cols="30" rows="5"></textarea>
                </label>
                <label>
                    Электронная почта для связи *
                    <input type="text" />
                </label>
                <label>
                    Телефон для связи
                    <input type="text" />
                </label>
                <Button additionalClass={'form-btn'} title='ЗАБРОНИРОВАТЬ' />
            </div>
        );
    }
}

export default GroupForm;