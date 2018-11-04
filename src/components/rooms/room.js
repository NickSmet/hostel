import React from 'react';
import { connect } from 'react-redux';

import * as actions from './../../store/actions/actions'
import Slider from './room-slider';
import RoomInfo from './room-info';

class Room extends React.Component {

    componentDidMount() {
        this.props.loadData();

    }

    iframeMarkup = () => {
        const id = this.props.match.params.number;
        const room = this.props.rooms.filter( room => room.id === id )[0];
        return {__html: room.iframe};
    }

    render() {
        const id = this.props.match.params.number;
        const room = this.props.rooms.filter( room => room.id === id )[0];
        let imgs = [];
        if(!!room) {
            imgs = Object.entries(room.images);
            imgs = imgs.map(item => {
                return item[1]
            });
        } 
        return (
            <div className="container">
                {
                    !!room ?
                    (
                        <div>
                            <Slider imgs={ imgs } />
                            <div className='room-wubook'>
                                <h3>{ room.name }</h3>
                                <h4>От <span>{ room.price } ₽</span>/сутки</h4>
                                
                                <div dangerouslySetInnerHTML={ this.iframeMarkup() }></div>
                            </div>
                            <RoomInfo room={ room }/>
                        </div>
                    )
                    :
                    'Загрузка'
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rooms: state.ru.rooms
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(actions.getRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);