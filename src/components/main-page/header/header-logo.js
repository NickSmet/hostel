import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = (props) => {
    return (
        <Link to="/" className={props.isMobile ? 'header-logo header-logo_mobile' : 'header-logo'}>
            <img src="http://centeral.ru/img/logo.svg" alt="Centeral Hostel & Hotel"/>
        </Link>
    );
}

export default HeaderLogo;