import React from 'react';

import Slider from './slider/slider';
import Gallery from './gallery/gallery';
import Book from './../shared/wubook-btn';
import Info from './info/info';

const MainPage = () => {
    return (
        <div>
            <Slider />
            <Gallery />
            <Book title='Забронировать' href={
                "https://wubook.net/wbkd/wbk/?lcode=1484303494&lang=ru&wbgoogle=1&open_on_tab=1&creferrer=http://centeral.ru/"
            }/>
            <Info />
        </div>
    );
}

export default MainPage;
