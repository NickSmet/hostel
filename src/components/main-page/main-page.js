import React from 'react';

import Slider from './slider/slider';
import Gallery from './gallery/gallery';
import Book from './wubook/book';
import Info from './info/info';

const MainPage = () => {
    return (
        <div>
            <Slider />
            <Gallery />
            <Book />
            <Info />
        </div>
    );
}

export default MainPage;
