import React from 'react';

const HeaderMainMenuBtns = () => {
    return (
        <div>
            <ul className='main-menu-items'>
                <li>
                    <a href='#item'>КОНТАКТЫ</a>
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
                    <a href='#item'>ХОСТЕЛ</a>
                </li>
                <li>
                    <a href='#item'>ОТЕЛЬ</a>
                </li>
                <li>
                    <a href='/#/'>ГЛАВНАЯ</a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderMainMenuBtns;