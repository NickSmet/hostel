import React from 'react';
import Button from './../shared/btn.js';

const RoomCard = ({ room }) => {
    return (
        <div className='room'>
            <a href={ window.location.hash + '/' + room.id }>
                <img src={ room.main_image.replace('..', 'http://dev.centeral.ru') } alt={ room.name }/>
            </a>
            <div className='room-plate'>
                <a href={ window.location.hash + '/' + room.id }>
                    <div className='room-title'><span>{ room.name }</span></div>
                </a>
                <div className='room-price'>От { room.price } ₽ за сутки</div>
                <a href={ window.location.hash + '/' + room.id }>
                    <Button title='СМОТРЕТЬ' additionalClass='room-btn' />
                </a>
            </div>
        </div>
    );
}

export default RoomCard;