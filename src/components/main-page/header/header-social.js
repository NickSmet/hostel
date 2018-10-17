import React from 'react';

const HeaderSocial = ({ contacts }) => {
    return (
        <div className='header-social'>
            <a href={ contacts.fb }>
                <i className='fa fa-facebook'></i>
            </a>
            <a href={ contacts.vk }>
                <i className='fa fa-vk'></i>
            </a>
            <a href={ contacts.ig }>
                <i className='fa fa-instagram'></i>
            </a>
            <a href={ contacts.ta }>
                <i className='fa fa-tripadvisor'></i>
            </a>
        </div>
    );
}

export default HeaderSocial;