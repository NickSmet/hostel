import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { getGalleryImgs } from './../../../store/actions/actions';
import * as types from '../../../store/actions/actions';
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
                {
                    !!this.props.imgToShow &&
                            <Modal dialogClassName="image-modal" show={ !!this.props.imgToShow } onHide={ () => this.props.setOpenImg(false) }>
                                <div className='gallery-open-img-wrapper'>
                                    <img className='gallery-open-img' src={ this.props.imgToShow } alt="Изображение"/>
                                </div>
                            </Modal>      
                }            
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeCat: state.ui.mainGallery.cat,
        imgToShow: state.ui.mainGallery.open
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadImgs: (cat) => dispatch(getGalleryImgs(cat)),
        setOpenImg: (path) => dispatch({ type: types.OPEN_GALLERY_IMG, path: path })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);