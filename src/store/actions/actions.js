import * as getData from './../../get-data/get-data';

export const GET_CONTACTS = 'GET_CONTACTS';
export const OPEN_LEFT_MENU = 'OPEN_LEFT_MENU';
export const HANDLE_HOVER = 'HANDLE_HOVER';

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

