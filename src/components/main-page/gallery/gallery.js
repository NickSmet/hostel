import React from 'react';

import './gallery.css';
import GalleryCategories from './gallery-categories';

class Gallery extends React.Component {
    render() {
        return(
            <div className='gallery'>
                <h1>
                    ГАЛЕРЕЯ
                </h1>
                <GalleryCategories />
            </div>
        );
    }
}

export default Gallery;