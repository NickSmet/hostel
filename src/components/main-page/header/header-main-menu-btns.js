import React from 'react';

const HeaderMainMenuBtns = () => {
    return (
        <div>
            <ul className='main-menu-items'>
                <li>
                    <a href='/#/contacts'>КОНТАКТЫ</a>
                </li>
                <li>
                    <a href='/#/transfer'>ТРАНСФЕР</a>
                </li>
                <li>
                    <a href='/#/visa'>ВИЗОВАЯ ПОДДЕРЖКА</a>
                </li>
                <li>
                    <a href='/#/groups'>ГРУППОВОЕ БРОНИРОВАНИЕ</a>
                </li>
                <li>
                    <a href='/#/hostel'>ХОСТЕЛ</a>
                </li>
                <li>
                    <a href='/#/hotel'>ОТЕЛЬ</a>
                </li>
                <li>
                    <a href='/#/'>ГЛАВНАЯ</a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderMainMenuBtns;