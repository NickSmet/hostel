import React from 'react';
import { connect } from 'react-redux';
import { PanelGroup, Panel } from 'react-bootstrap';
import * as actions from './../../store/actions/actions';
import './faq.css';


class FAQ extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
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
                                            { item.description }
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
        faq: state.ru.faq
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(actions.getFaq())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);