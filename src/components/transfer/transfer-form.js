import React from 'react';
import Button from './../shared/btn';

const TransferForm = () => {
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
                    Дата прибытия
                    <input type="date" />
                </label>
                <label>
                    Время прибытия
                    <input type="time" />
                </label>
                <label>
                    Место прибытия
                    <textarea name="consumer" id="consumer" cols="30" rows="5"></textarea>
                </label>
                <label>
                    Организация или ФИО заказчика
                    <textarea name="consumer" id="consumer" cols="30" rows="5"></textarea>
                </label>
                <label>
                    Количество человек
                    <input type="text" />
                </label>
                <label>
                    Комментарии
                    <textarea name="consumer" id="consumer" cols="30" rows="5"></textarea>
                </label>
                <label>
                    Электронная почта для связи *
                    <input type="text" />
                </label>
                <label>
                    Телефон для связи
                    <input type="text" />
                </label>
                <Button additionalClass={'form-btn'} title='ОТПРАВИТЬ ЗАПРОС'/>
        </div>
    );
}

export default TransferForm;