import React from 'react';
import { connect } from 'react-redux';

import GalleryMainItem from './gallery-main-item';

class GalleryMain extends React.Component {

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

    createItems = (imgs) => {
        return imgs.map((item) => {
            if(item.category === this.props.cat || this.props.cat === 'all')
            return (
                    <GalleryMainItem 
                        key={ item.id } 
                        path={ item.path.replace('..', 'http://dev.centeral.ru') } 
                        title={ item.description } 
                        //path={ item.path } 
                    />
            );
            return <div>Ошибка</div>
        });
    }

    render() {
        return (
            <div className={ 'gallery-main ' + this.state.onMountClass }>
               { this.createItems(this.props.imgs) } 
            </div>
        );   
    }     
}

const mapStateToProps = state => {
    return {
        cat: state.ui.mainGallery.cat,
        imgs: state.ui.mainGallery.imgs
    }
}

export default connect(mapStateToProps)(GalleryMain);