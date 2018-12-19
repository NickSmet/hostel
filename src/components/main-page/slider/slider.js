import React from 'react';
import SlickSlider from "react-slick";
import { connect } from 'react-redux';

import { getSliderImgs } from '../../../store/actions/actions';
import './../../../../node_modules/slick-carousel/slick/slick.css';
import './../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './slider.css';

class Slider extends React.Component {

    componentDidMount() {
        this.props.loadImgs();
    }

    formatImgs = () => {
        return this.props.imgs.map((item) => {
            return (
                <img key={item.id} 
                    className='main-gallery-img' 
                    //src={item.path.replace('..', 'http://centeral.ru')} alt="Фото"
                    src={item.path.replace('..', 'http://centeral.ru')} alt="Фото"
                />
            );
        });

    }

    render() {
        const settings = {
            infinite: true,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 4500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: "ease"
          };
          
          return (
            <div className='main-slider-wrapper'>
              <SlickSlider {...settings}>
                { this.formatImgs() }
              </SlickSlider>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        imgs: state.ui.slider.imgs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadImgs: () => dispatch(getSliderImgs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);