import React from 'react';
import Button from './../shared/btn';
const ContactsForm = () => {
    return (
        <div className='contacts-form-wrapper'>
            <h2>Форма связи</h2>
            <label>
                Ваше имя *
                    <input type="text" />
            </label>
            <label>
                Ваш Email *
                    <input type="text" />
            </label>
            <label>
                Ваше сообщение
                    <textarea name="wishes" id="wishes" cols="30" rows="5"></textarea>
            </label>
            <Button additionalClass={'contacts-form'} title='ОТПРАВИТЬ' />
        </div>
    );
}

export default ContactsForm;