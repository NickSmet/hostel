import React from 'react';
import { Col, Row } from 'react-bootstrap';

import HeaderLogo from './header-logo';
import HeaderBurderMenu from './header-burger-menu';

import './header.css';

const HeaderMainMenu = () => {
    return (
        <Row className='mobile-main-menu-wrapper'>
          <div className='container mobile-menu-container'>
            <Col  lgHidden={true} xs={10}  >
              <HeaderLogo isMobile={true}/>
            </Col>
            <Col lgHidden={true} xs={2} className='p-r-0'>
                <HeaderBurderMenu />
            </Col>
          </div>
        </Row>
    );
}

export default HeaderMainMenu;