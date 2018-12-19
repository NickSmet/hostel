import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as types from '../../../store/actions/actions';

class HeaderSideMenu extends React.Component {
    render() {
        let lang = this.props.lang;
        return (
            <div className={this.props.leftMenuIsOpen ? 'side-menu-items-wrapper show-side-menu' : 'side-menu-items-wrapper hide-side-menu'}>
                <ul className='side-menu-items'>
                    <li onClick={ this.props.closeMenu }>
                        <Link to='/'>{ lang.main }</Link>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <Link to='/hotel'>{ lang.hotel }</Link>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <Link to='/hostel'>{ lang.hostel }</Link>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <Link to='/groups'>{ lang.group }</Link>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <Link to='/visa'>{ lang.visa }</Link>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <Link to='/transfer'>{ lang.transfer }</Link>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <Link to='/contacts'>{ lang.contacts }</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        leftMenuIsOpen: state.ui.main.leftMenuIsOpen,
        lang: state[state.lang].interface.menu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeMenu: () => dispatch({ type: types.OPEN_LEFT_MENU })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderSideMenu);