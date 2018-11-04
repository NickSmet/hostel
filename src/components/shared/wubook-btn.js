import React from 'react'

const WuBook = ({ title, href }) => {
    return (
        <a href={ href } className='wubook-btn' target="_blank ">
            <div>{ title }</div>
        </a>
    );
};

export default WuBook;