import  React from 'react';

const Contacts = ({ contacts }) => {
    return (
        <div className='contacts-contacts'>
            <h2>Контактные данные</h2>
            <div><strong>Адрес: </strong>{ contacts.address }</div>
            <div><strong>Ресепшн хостела: </strong>
                <a href={"tel:"+ contacts.phone}>{ contacts.phone }</a>
            </div>
            <div><strong>Ресепшн гостиницы: </strong>
                <a href={"tel:"+ contacts.phone}>{ contacts.phone }</a>
            </div>
            <div><strong>Отдел продаж: </strong>
                <a href={"tel:"+ contacts.phone}>{ contacts.sales_phone }</a>
            </div>
            <div><strong>E-mail: </strong>
                <a href={"mailto:"+ contacts.email}>{ contacts.email }</a>
            </div>
        </div>
    );
}

export default Contacts;