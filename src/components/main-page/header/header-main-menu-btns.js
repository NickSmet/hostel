import React from 'react';
import { connect } from 'react-redux';


const HeaderMainMenuBtns = ({ lang }) => {
    return (
        <div>
            <ul className='main-menu-items'>
                <li>
                    <a href='/#/contacts'>{ lang.contacts }</a>
                </li>
                <li>
                    <a href='/#/transfer'>{ lang.transfer }</a>
                </li>
                <li>
                    <a href='/#/visa'>{ lang.visa }</a>
                </li>
                <li>
                    <a href='/#/groups'>{ lang.group }</a>
                </li>
                <li>
                    <a href='/#/hostel'>{ lang.hostel }</a>
                </li>
                <li>
                    <a href='/#/hotel'>{ lang.hotel }</a>
                </li>
                <li>
                    <a href='/#/'>{ lang.main }</a>
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