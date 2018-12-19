import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({ imgs }) => {
    return (
        <div className='room-slider'>
            <Carousel 
                showArrows={false} 
                swipeable={true} 
                emulateTouch={true}
                showStatus={false}
                showIndicators={false}
            >
                {
                    imgs.map((item, i) => {
                       return (
                           <div key={ i }>
                               <img src={ item.path.replace('..', 'http://centeral.ru') } alt='Изображение номера' />
                           </div>
                       ) 
                    })
                    
                }
            </Carousel>
        </div>
    );
}

export default Slider;