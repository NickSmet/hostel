import React from 'react';
import { connect } from 'react-redux';

import * as actions from './../../store/actions/actions'
import './rooms.css';
import RoomCard from './rooms-card';

class Rooms extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }
    
    render() {
        return (
            <div className="container">
                <div className="rooms">
                    <h1>Номера и цены</h1>
                    {
                        this.props.rooms.map((item) => {
                            if(item.category === this.props.cat) {
                                return (
                                    <RoomCard key={ item.id } room={ item } />
                                );
                            }
                        })
                    }
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);