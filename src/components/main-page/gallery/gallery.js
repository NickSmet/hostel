import React from 'react';
import { connect } from 'react-redux';

import { getGalleryImgs } from './../../../store/actions/actions';
import './gallery.css';
import GalleryCategories from './gallery-categories';
import GalleryMain from './gallery-main';

class Gallery extends React.Component {

    componentWillMount() {
        this.props.loadImgs(this.props.activeCat);
    }

    render() {
        return(
            <div className='gallery'>
                <h1>
                    ГАЛЕРЕЯ
                </h1>
                <GalleryCategories />
                <GalleryMain />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeCat: state.ui.mainGallery.cat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadImgs: (cat) => dispatch(getGalleryImgs(cat)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);