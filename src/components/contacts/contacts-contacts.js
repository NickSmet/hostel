import React from 'react';

const Contacts = ({ contacts, lang }) => {
  return (
    <div className="contacts-contacts">
      <h2>{lang.title}</h2>
      <div>
        <strong>{lang.address.title}: </strong>
        {contacts.address}
      </div>
      <div>
        <strong>{lang.hostel}: </strong>
        <a href={'tel:' + contacts.phone}>{contacts.phone}</a>
      </div>
      <div>
        <strong>{lang.hotel}: </strong>
        <a href={'tel:' + contacts.hotel_phone}>{contacts.hotel_phone}</a>
      </div>
      <div>
        <strong>{lang.sale}: </strong>
        <a href={'tel:' + contacts.phone}>{contacts.sales_phone}</a>
      </div>
      <div>
        <strong>E-mail: </strong>
        <a href={'mailto:' + contacts.email}>{contacts.email}</a>
      </div>
    </div>
  );
};

export default Contacts;
