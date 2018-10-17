import * as getData from './../../get-data/get-data';

export const GET_CONTACTS = 'GET_CONTACTS';

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

