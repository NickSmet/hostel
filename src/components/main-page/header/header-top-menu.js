import React from 'react';
import { connect } from 'react-redux';

const HeaderTopMenu = ({ map }) => {
    return (
        <div className='header-top-menu'>
            <a href="/#/contacts">{ map }</a>
            <span> || </span>
            <a href="/#/faq">FAQ</a>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        map: state[state.lang].interface.map
    }
}
export default connect(mapStateToProps)(HeaderTopMenu);
