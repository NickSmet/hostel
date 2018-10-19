import * as getData from './../../get-data/get-data';

export const GET_CONTACTS = 'GET_CONTACTS';
export const OPEN_LEFT_MENU = 'OPEN_LEFT_MENU';
export const HANDLE_HOVER = 'HANDLE_HOVER';
export const GET_MAIN_GALLERY_IMGS = 'GET_MAIN_GALLERY_IMGS';

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

export const saveMainGalleryImgs = (imgs) => {
    return {
        type: GET_MAIN_GALLERY_IMGS,
        imgs: imgs
    }
}

export const getMainGalleryImgs = () => {
    return dispatch => {
        getData.getMainGalleryImgs().then(res => {
            dispatch(saveMainGalleryImgs(res.data));
        })
    };
}

