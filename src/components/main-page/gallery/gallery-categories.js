import React from 'react';
import { connect } from 'react-redux';
import * as types from './../../../store/actions/actions';


const GalleryCategories = ({ lang, ...props }) => {
    return (
        <div className='gallery-cats'>
            <div 
                onClick={ () => props.changeCat('all') } 
                className={ props.activeCat === 'all' ? 'cat-active' : '' }
            >
                { lang.all }
            </div>
            <div 
                onClick={ () => props.changeCat('hostel') } 
                className={ props.activeCat === 'hostel' ? 'cat-active' : '' }
            >
                { lang.hostel }
            </div>
            <div 
                onClick={ () => props.changeCat('hotel') } 
                className={ props.activeCat === 'hotel' ? 'cat-active' : '' }
            >
                { lang.hotel }
            </div>
            <div 
                onClick={ () => props.changeCat('other') } 
                className={ props.activeCat === 'other' ? 'cat-active' : '' }
            >
                { lang.other }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        activeCat: state.ui.mainGallery.cat,
        lang: state[state.lang].interface.gallery
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCat: (cat) => dispatch(
            {
                type: types.CHANGE_GALLERY_CAT,
                cat: cat
            }
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryCategories);