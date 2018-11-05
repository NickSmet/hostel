import React from 'react';
import { connect } from 'react-redux';

const Lang = ({ lang, switchLang }) => {
    return (
        <div className='lang'>
            <span 
                className={ lang === 'ru' ? 'ru active' : 'ru' }
                onClick={ () => switchLang('ru') }
            >RU</span>
            <span 
                className={ lang === 'en' ? 'en active' : 'en' }
                onClick={ () => switchLang('en') }
            >EN</span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        lang: state.lang
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchLang: (lang) => dispatch({ type: 'SWITCH_LANG', lang: lang })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lang);