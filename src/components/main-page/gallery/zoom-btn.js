import React from 'react';
import * as types from '../../../store/actions/actions';
import { connect } from 'react-redux';
const ZoomBtn = (props) => {
    return (
        <div className='gallery-zoom-btn' onClick={ () => {
            props.setOpenImg(props.path)
        }}>
            <i className="fa fa-search"></i>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setOpenImg: (path) => dispatch({ type: types.OPEN_GALLERY_IMG, path: path })
    };
}

export default connect(null, mapDispatchToProps)(ZoomBtn);