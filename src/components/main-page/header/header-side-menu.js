import React from 'react';
import { connect } from 'react-redux';

class HeaderSideMenu extends React.Component {
    render() {
        return (
            <div className={this.props.leftMenuIsOpen ? 'side-menu-items-wrapper show-side-menu' : 'side-menu-items-wrapper hide-side-menu'}>
                <ul className='side-menu-items'>
                    <li>
                        <a href='/#/'>ГЛАВНАЯ</a>
                    </li>
                    <li>
                        <a href='#item'>ОТЕЛЬ</a>
                    </li>
                    <li>
                        <a href='#item'>ХОСТЕЛ</a>
                    </li>
                    <li>
                        <a href='/#/groups'>ГРУППОВОЕ БРОНИРОВАНИЕ</a>
                    </li>
                    <li>
                        <a href='/#/visa'>ВИЗОВАЯ ПОДДЕРЖКА</a>
                    </li>
                    <li>
                        <a href='/#/transfer'>ТРАНСФЕР</a>
                    </li>
                    <li>
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

export default connect(mapStateToProps)(HeaderSideMenu);