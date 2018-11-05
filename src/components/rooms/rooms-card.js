import React from 'react';
import Button from './../shared/btn.js';
import { connect } from 'react-redux';

const RoomCard = ({ room, look, lang }) => {
    return (
        <div className='room'>
            <a href={ window.location.hash + '/' + room.id }>
                <img src={ room.main_image.replace('..', 'http://dev.centeral.ru') } alt={ room.name }/>
            </a>
            <div className='room-plate'>
                <a href={ window.location.hash + '/' + room.id }>
                    <div className='room-title'><span>{ room.name }</span></div>
                </a>
                {
                    lang === 'ru' ?
                    <div className='room-price'>От { room.price } ₽ /сутки</div>
                    :
                    <div className='room-price'>From { room.price } ₽ /night</div>
                }
                <a href={ window.location.hash + '/' + room.id }>
                    <Button title={ look } additionalClass='room-btn' />
                </a>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        look: state[state.lang].interface.look,
        lang: state.lang
    }
}

export default connect(mapStateToProps)(RoomCard);
