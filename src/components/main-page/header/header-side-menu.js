import React from 'react';
import { connect } from 'react-redux';

import * as types from '../../../store/actions/actions';

class HeaderSideMenu extends React.Component {
    render() {
        return (
            <div className={this.props.leftMenuIsOpen ? 'side-menu-items-wrapper show-side-menu' : 'side-menu-items-wrapper hide-side-menu'}>
                <ul className='side-menu-items'>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/'>ГЛАВНАЯ</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/hotel'>ОТЕЛЬ</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/hostel'>ХОСТЕЛ</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/groups'>ГРУППОВОЕ БРОНИРОВАНИЕ</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/visa'>ВИЗОВАЯ ПОДДЕРЖКА</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/transfer'>ТРАНСФЕР</a>
                    </li>
                    <li onClick={ this.props.closeMenu }>
                        <a href='/#/contacts'>КОНТАКТЫ</a>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        leftMenuIsOpen: state.ui.main.leftMenuIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeMenu: () => dispatch({ type: types.OPEN_LEFT_MENU })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderSideMenu);