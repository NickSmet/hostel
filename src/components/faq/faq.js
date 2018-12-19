import React from 'react';
import { connect } from 'react-redux';
import { PanelGroup, Panel } from 'react-bootstrap';
import * as actions from './../../store/actions/actions';
import './faq.css';
import ReactGA from 'react-ga';

class FAQ extends React.Component {

    constructor() {
        super();
        ReactGA.initialize('UA-131048082-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    componentDidMount() {
        this.props.getData();
    }

    dangerousText(i) {
        return{__html: this.props.faq[i].description}
    }

    render() {
        console.log(this.props.faq.description);
        return (
            <div className="container">
                <div className='faq'>
                    <h1>FAQ</h1>
                    <PanelGroup accordion id="faq">
                        {
                            this.props.faq.map((item, i) => {
                                return (
                                    <Panel eventKey={i} key={i}>
                                        <Panel.Heading>
                                            <Panel.Title toggle>{ item.name }</Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Body collapsible>
                                        <div dangerouslySetInnerHTML={ this.dangerousText(i) }></div>
                                        </Panel.Body>
                                    </Panel>
                                );
                            })
                        }
                    </PanelGroup>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        faq: state[state.lang].faq
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(actions.getFaq())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);