import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import * as actions from './../../store/actions/actions'
import './rooms.css';
import RoomCard from './rooms-card';

class Rooms extends React.Component {

    constructor() {
        super();
        ReactGA.initialize('UA-131048082-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    componentDidMount() {
        this.props.loadData();
    }
    
    render() {
        return (
            <div className="container">
                <div className="rooms">
                    {
                        this.props.lang === 'en' ?
                        <h1>Rooms and prices</h1>
                        :
                        <h1>Номера и цены</h1>
                    }

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
        rooms: state[state.lang].rooms,
        lang: state.lang
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(actions.getRooms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);