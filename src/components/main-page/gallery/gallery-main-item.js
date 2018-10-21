import React from 'react';


const GalleryMainItem = props => {
    return (
            <div className='gallery-item'>
                <img src={ props.path } alt="Галерея"  />
                <div className='gallery-item-mask'></div>
            </div>
    );
}

export default GalleryMainItem;