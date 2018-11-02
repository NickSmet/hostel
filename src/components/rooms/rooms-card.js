import React from 'react';
import Button from './../shared/btn.js';

const RoomCard = ({ room }) => {
    return (
        <div className='room'>
            <div>
                <img src={ room.main_image.replace('..', 'http://dev.centeral.ru') } alt={ room.name }/>
            </div>
            <div className='room-plate'>
                <div className='room-title'><span>{ room.name }</span></div>
                <div className='room-price'>От { room.price } за сутки</div>
                <Button title='СМОТРЕТЬ' additionalClass='room-btn' />
            </div>
        </div>
    );
}

export default RoomCard;