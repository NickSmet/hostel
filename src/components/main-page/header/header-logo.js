import React from 'react';

const HeaderLogo = (props) => {
    return (
        <a href="/#/" className={props.isMobile ? 'header-logo header-logo_mobile' : 'header-logo'}>
            <img src="http://dev.centeral.ru/img/logo.svg" alt="Centeral Hostel & Hotel"/>
        </a>
    );
}

export default HeaderLogo;