import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderMainMenuBtns = ({ lang }) => {
    return (
        <div>
            <ul className='main-menu-items'>
                <li>
                    <Link to='/contacts'>{ lang.contacts }</Link>
                </li>
                <li>
                    <Link to='/visa'>{ lang.visa }</Link>
                </li>
                <li>
                    <Link to='/groups'>{ lang.group }</Link>
                </li>
                <li>
                    <Link to='/hostel'>{ lang.hostel }</Link>
                </li>
                <li>
                    <Link to='/hotel'>{ lang.hotel }</Link>
                </li>
                <li>
                    <Link to='/'>{ lang.main }</Link>
                </li>
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
   return {
        lang: state[state.lang].interface.menu
   }
}

export default connect(mapStateToProps)(HeaderMainMenuBtns);