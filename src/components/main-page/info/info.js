import React from 'react';
import { connect } from 'react-redux';
import { getInfo } from './../../../store/actions/actions';
import './info.css';

class Info extends React.Component {
    componentDidMount() {
        this.props.loadInfo();
    }

    render() {
        console.log('component:', this.props.info);
        return (
            <div className='info'>
                <div className='info-img-wrapper'>
                    <img
                        src={this.props.info.image.replace('..', 'http://dev.centeral.ru')}
                        alt="Изображение" />
                </div>
                
                <div className='info-text-wrapper'>
                    <h2>{this.props.info.title}</h2>
                    <div className='info-text'>{this.props.info.text}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        info: state.ru.info
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadInfo: () => dispatch(getInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);