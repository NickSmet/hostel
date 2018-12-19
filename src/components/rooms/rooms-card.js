import React from 'react';
import Button from './../shared/btn.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RoomCard = ({ room, look, lang }) => {
    return (
        <div className='room'>
            <Link to={ window.location.pathname + '/' + room.id }>
                <img src={ room.main_image.replace('..', 'http://centeral.ru') } alt={ room.name }/>
            </Link>
            <div className='room-plate'>
                <Link to={ window.location.pathname + '/' + room.id }>
                    <div className='room-title'><span>{ room.name }</span></div>
                </Link>
                {
                    lang === 'ru' ?
                    <div className='room-price'>От { room.price } ₽ /сутки</div>
                    :
                    <div className='room-price'>From { room.price } ₽ /night</div>
                }
                <Link to={ window.location.pathname + '/' + room.id }>
                    <Button title={ look } additionalClass='room-btn' />
                </Link>
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
