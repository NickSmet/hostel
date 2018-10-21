import React from 'react';
import { connect } from 'react-redux';

import GalleryMainItem from './gallery-main-item';

class GalleryMain extends React.Component {

    createItems = (imgs) => {
        return imgs.map((item) => {
            return (
                    <GalleryMainItem 
                        key={ item.id } 
                        path={ item.path.replace('..', 'http://dev.centeral.ru') } 
                    />
            );
        });
    }

    render() {
        return (
            <div className='gallery-main'>
               { this.createItems(this.props.imgs) } 
            </div>
        );   
    }     
}

const mapStateToProps = state => {
    return {
        imgs: state.ui.mainGallery.imgs
    }
}

export default connect(mapStateToProps)(GalleryMain);