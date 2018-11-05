import React from 'react';
import './footer.css';
import FooterLogo from './footer-logo';
import { connect } from 'react-redux';
import FooterContacts from './../../shared/contacts';
import FooterCopy from './footer-copy';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                    <div className='container'>
                        <div className='footer-container'>
                            <FooterLogo />
                            <FooterContacts component='footer' contacts={this.props.contacts} />
                        </div>    
                    </div>
                    <FooterCopy />
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state[state.lang].contacts
    }
}

export default connect(mapStateToProps)(Footer);