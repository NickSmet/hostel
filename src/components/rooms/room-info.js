import React from 'react';

import Description from './room-info-descr';
import Options from './room-options';
import { connect } from 'react-redux';

class RoomInfo extends React.Component {

    state = {
        activeTab: '1'
    }

    handleTabClick = (key) => {
        this.setState({ activeTab: key });
    }

    render() {
        return (
            <div className='room-info-container'>
                <div className="info-tabs">
                    <div 
                        data-key='1' 
                        className={ this.state.activeTab === '1' ? "info-tab active" : "info-tab" }
                        onClick={ e => this.handleTabClick(e.target.dataset.key) }
                    >
                        {
                            this.props.lang === 'ru' ?
                            'Описание'
                            :
                            'Decription'
                        }
                        
                    </div>
                    <div 
                        data-key='2' 
                        className={ this.state.activeTab === '2' ? "info-tab active" : "info-tab" }
                        onClick={ e => this.handleTabClick(e.target.dataset.key) }
                    >
                        {
                            this.props.lang === 'ru' ?
                            'Удобства'
                            :
                            'Facilities'
                        }
                       
                    </div>
                    <div 
                        data-key='3' 
                        className={ this.state.activeTab === '3' ? "info-tab active" : "info-tab" }
                        onClick={ e => this.handleTabClick(e.target.dataset.key) }
                    >
                        {
                            this.props.lang === 'ru' ?
                            'Дополнительные услуги'
                            :
                            'Additional services'
                        }
                        
                    </div>

                </div>
                
                <div className="info-body">
                    {
                        this.state.activeTab === '1' && 
                        <Description text={ this.props.room.description } /> 
                    }
                    {
                        this.state.activeTab === '2' && 
                        <Options options={ this.props.room.options } /> 
                    }
                    {
                        this.state.activeTab === '3' && 
                        <Options hasPrice options={ this.props.room.extra } /> 
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.lang
    }
}

export default connect(mapStateToProps)(RoomInfo);