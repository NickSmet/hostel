import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderTopMenu = ({ map }) => {
    return (
        <div className='header-top-menu'>
            <Link to="/contacts">{ map }</Link>
            <span> || </span>
            <Link to="/faq">FAQ</Link>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        map: state[state.lang].interface.map
    }
}
export default connect(mapStateToProps)(HeaderTopMenu);
