import React from 'react';
import { connect } from 'react-redux';

import './hamburgers.css';

import * as types from '../../../store/actions/actions';

class HeaderBurderMenu extends React.Component {

    handleClass = () => {
        let isActive = false;
        let name= '';

        if(this.props.leftMenuIsOpen) {
            name = 'menu-btn hamburger hamburger--arrow-r';
        } else {
            name = 'menu-btn hamburger hamburger--arrow';
        }

        if(this.props.isHover) {
            isActive = true;
        }

        if(this.props.justClosed) {
            isActive = false;
        }

        if(isActive || this.props.leftMenuIsOpen) {
            name += ' is-active';
        } 

        return name;
    }

    render() {
        let name = this.handleClass();
        return (
            <div>
                <button
                    className={ name }
                    type="button"
                    onMouseEnter={ this.props.onHover }
                    onMouseLeave={ this.props.onHover }
                    onClick={ this.props.onOpen }
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner hamburger-inner-white"></span>
                    </span>
                </button>
            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        leftMenuIsOpen: state.ui.main.leftMenuIsOpen,
        isHover: state.ui.main.isHover,
        justClosed: state.ui.main.justClosed
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onHover: () => dispatch({ type: types.HANDLE_HOVER }),
        onOpen: () => dispatch({ type: types.OPEN_LEFT_MENU }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBurderMenu);