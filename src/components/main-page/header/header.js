import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import { getContacts } from './../../../store/actions/actions.js';
import HeaderContacts from './header-contacts';
import HeaderSocial from './header-social';
import HeaderTopMenu from './header-top-menu';
import HeaderBookBtn from './../../shared/btn';
import Lang from './lang';

import './header.css';

class Header extends Component {

    componentWillMount() {
        this.props.loadData();
    }

    render() {
        return (
            <header>
                <div className="header__top">
                    <Row className='header__top_row'>
                        <div className='container header__top_container'>
                            <Col xsHidden={true} sm={12} md={12} lg={5} className='header-contacts-wrapper'>
                                <HeaderContacts contacts={this.props.contacts} />
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={2}>
                                <HeaderSocial contacts={this.props.contacts} />
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={2} >
                                <HeaderTopMenu />
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={2} className='col__header-book-btn'>
                                <HeaderBookBtn 
                                    title={this.props.book} 
                                    isLink={true} 
                                    href={'https://wubook.net/wbkd/wbk/?lcode=1484303494'} 
                                />
                            </Col>
                        </div>
                    </Row>
                </div>
                <Lang />
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
            contacts: state[state.lang].contacts,
            book: state[state.lang].interface.book
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(getContacts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);