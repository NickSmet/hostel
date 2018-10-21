import * as getData from './../../get-data/get-data';

export const GET_CONTACTS = 'GET_CONTACTS';
export const OPEN_LEFT_MENU = 'OPEN_LEFT_MENU';
export const HANDLE_HOVER = 'HANDLE_HOVER';
export const GET_MAIN_GALLERY_IMGS = 'GET_MAIN_GALLERY_IMGS';
export const GET_SLIDER_IMGS = 'GET_SLIDER_IMGS';
export const CHANGE_GALLERY_CAT = 'CHANGE_GALLERY_CAT';
export const GET_GALLERY_IMGS = 'GET_GALLERY_IMGS';

export const saveContacts = (contacts) => {
    return {
        type: GET_CONTACTS,
        contacts: contacts
    }
}

export const getContacts = () => {
    return dispatch => {
        getData.getContacts().then(res => {
            dispatch(saveContacts(res.data[0]));
        })
    };
}

export const saveSlider = (imgs) => {
    return {
        type: GET_SLIDER_IMGS,
        imgs: imgs
    }
}

export const getSliderImgs = () => {
    return dispatch => {
        getData.getSliderImgs().then(res => {
            dispatch(saveSlider(res.data));
        })
    };
}

export const saveGalleryImgs = (imgs) => {
    return {
        type: GET_GALLERY_IMGS,
        imgs: imgs
    }
}

export const getGalleryImgs = (cat) => {
    return dispatch => {
        getData.getGalleryImgs(cat).then(res => {
            dispatch(saveGalleryImgs(res.data));
        })
    };
}

export const changeGalleryCat = (cat) => {
    return dispatch => {
        //getGalleryImgs(cat);
        getData.getGalleryImgs(cat).then(res => {
            dispatch(saveGalleryImgs(res.data));
            dispatch({
                type: CHANGE_GALLERY_CAT,
                cat: cat
            });
        })
        
    }
    
}

