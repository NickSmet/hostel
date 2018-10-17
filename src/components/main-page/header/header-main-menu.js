import React from 'react';
import { Col, Row } from 'react-bootstrap';

import HeaderLogo from './header-logo';
import HeaderMainMenuBtns from './header-main-menu-btns';

import './header.css';

const HeaderMainMenu = () => {
    return (
        <Row className='main-menu-wrapper'>
          <div className='container'>
            <Col xsHidden={true} smHidden={true} mdHidden={true} lg={3} >
              <HeaderLogo  isMobile={false}/>
            </Col>
            <Col xsHidden={true} smHidden={true} mdHidden={true} lg={9} className='p-r-0'>
                <HeaderMainMenuBtns />
            </Col>
          </div>
        </Row>
    );
}

export default HeaderMainMenu;