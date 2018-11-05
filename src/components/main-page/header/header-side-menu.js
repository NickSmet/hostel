import React from 'react';
import { connect } from 'react-redux';

import * as types from '../../../store/actions/actions';

class HeaderSideMenu extends React.Component {
    render() {
        let lang = this.props.lang;
        return (
            <div className={this.props.leftMenuIsOpen ? 'side-menu-items-wrapper show-side-menu' : 'side-menu-items-wrapper hide-side-menu'}>
                <ul className='side-menu-items'>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/'>{ lang.main }</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/hotel'>{ lang.hotel }</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/hostel'>{ lang.hostel }</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/groups'>{ lang.group }</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/visa'>{ lang.visa }</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/transfer'>{ lang.transfer }</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/contacts'>{ lang.contacts }</a>
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