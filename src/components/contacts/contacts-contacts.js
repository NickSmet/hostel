import  React from 'react';

const Contacts = ({ contacts }) => {
    return (
        <div className='contacts-contacts'>
            <h2>Контактные данные</h2>
            <div><strong>Адрес: </strong>{ contacts.address }</div>
            <div><strong>Ресепшн хостела: </strong>{ contacts.phone }</div>
            <div><strong>Ресепшн гостиницы: </strong>{ contacts.phone }</div>
            <div><strong>Отдел продаж: </strong>{ contacts.sales_phone }</div>
            <div><strong>E-mail: </strong>{ contacts.email }</div>
        </div>
    );
}

export default Contacts;