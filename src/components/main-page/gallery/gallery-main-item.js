import React from 'react';
import ZoomBtn from './zoom-btn';

class GalleryMainItem extends React.Component {

    
    constructor() {
        super();
        this.state = {
            onMountClass: ''
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ onMountClass: 'gallery-animate'});
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div className={ 'gallery-item ' + this.state.onMountClass } >
                <img src={ this.props.path } alt="Галерея"  />
                <div className='gallery-item-mask-wrapper'>
                    <div className='gallery-item-mask'>
                    </div>
                    <ZoomBtn path={ this.props.path }/>
                    {
                        !!this.props.title &&
                            <div className='gallery-item-title'>
                                <span>
                                    {this.props.title}
                                </span>
                            </div>
                    } 
                </div>
                
            </div>
        );
    }
    
}

export default GalleryMainItem;