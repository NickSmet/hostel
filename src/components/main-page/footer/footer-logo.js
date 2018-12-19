import React from 'react';
import { Link } from 'react-router-dom';

const FooterLogo = () => {
    return (
        <Link to="/" className='footer-logo'>
            <img src="http://centeral.ru/img/logo-footer.svg" alt="Centeral Hostel & Hotel"/>
        </Link>
    );
}

export default FooterLogo;