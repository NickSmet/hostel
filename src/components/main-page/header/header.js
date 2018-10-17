import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap'; 

import { getContacts } from './../../../store/actions/actions.js';
import HeaderContacts from './header-contacts';
import HeaderSocial from './header-social';
import HeaderTopMenu from './header-top-menu';

import './header.css';

class Header extends Component {

    componentWillMount() {
        this.props.loadData();
    }

    render() {
        return (
            <header>
                <div className="header__top">
                    <div className='container'>
                        <Row>
                            <Col xs={6} >
                               <HeaderContacts contacts={this.props.ru.contacts} />
                            </Col>
                            <Col xs={2} >
                               <HeaderSocial contacts={this.props.ru.contacts} />
                            </Col>
                            <Col xs={3} >
                               <HeaderTopMenu />
                            </Col>
                            <Col xs={1} >
                               
                            </Col>
                        </Row>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        ru: {
            contacts: state.ru.contacts
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(getContacts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);