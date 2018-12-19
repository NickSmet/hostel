import React from 'react';
import { connect } from 'react-redux';
import './visa.css'
import * as actions from './../../store/actions/actions';
import ReactGA from 'react-ga';
class Visa extends React.Component {

    constructor() {
        super();
        ReactGA.initialize('UA-131048082-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    componentDidMount() {
        this.props.loadVisa();
        
    }

    createIframe() {
        return {__html: this.props.iframe};
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={ this.createIframe() } className='visa'>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        iframe: state.visa.iframe
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadVisa: () => dispatch(actions.getVisa())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Visa);