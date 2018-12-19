import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import ContactsBlock from './contacts-contacts';
import Description from './contacts-descr';
import Ways from './contacts-ways';
import Form from './contacts-form';

import './contacts.css';

const Contacts = ({ contacts, lang, language }) => {
  ReactGA.initialize('UA-131048082-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="contacts">
      <div className="container">
        <ContactsBlock contacts={contacts} lang={lang.contacts} />
        <Description lang={lang.contacts} language={language} />
        <h3>{lang.contacts.address.title}:</h3>
        <Ways lang={language} />
        <a
          target="_blank"
          className="map"
          href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B5+%D0%9B%D0%B8%D0%BD%D0%B8%D0%B8,+1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+127051/@55.764111,37.6149517,16z/data=!4m5!3m4!1s0x46b54a4300bddffb:0x2770bea96cc9e50f!8m2!3d55.7641418!4d37.6185166"
        >
          <img src="http://centeral.ru/img/map_ru.png" alt="Карта" />
        </a>
        <Form lang={lang} language={language} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state[state.lang].contacts,
    lang: state[state.lang].interface,
    language: state.lang,
  };
};

export default connect(mapStateToProps)(Contacts);



