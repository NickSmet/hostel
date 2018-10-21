import React from 'react';
import { connect } from 'react-redux';

import * as types from './../../../store/actions/actions';

const GalleryCategories = (props) => {
    return (
        <div className='gallery-cats'>
            <div 
                onClick={ () => props.changeCat('all') } 
                className={ props.activeCat === 'all' ? 'cat-active' : '' }
            >
                Все
            </div>
            <div 
                onClick={ () => props.changeCat('hostel') } 
                className={ props.activeCat === 'hostel' ? 'cat-active' : '' }
            >
                Номера хостела
            </div>
            <div 
                onClick={ () => props.changeCat('hotel') } 
                className={ props.activeCat === 'hotel' ? 'cat-active' : '' }
            >
                Номера отеля
            </div>
            <div 
                onClick={ () => props.changeCat('other') } 
                className={ props.activeCat === 'other' ? 'cat-active' : '' }
            >
                Разное
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        activeCat: state.ui.mainGallery.cat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCat: (cat) => dispatch({
            type: types.CHANGE_GALLERY_CAT,
            cat: cat
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryCategories);