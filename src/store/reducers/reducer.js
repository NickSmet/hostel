import * as types from '../actions/actions';

const initialState = {
    en: {
        contacts: {}  
    },
    ru: {
        contacts: {}  
    }
};

const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case types.GET_CONTACTS:
            let ru = {
                contacts: {
                    address: action.contacts.address,
                    email: action.contacts.email,
                    fb: action.contacts.fb,
                    ig: action.contacts.ig,
                    phone: action.contacts.phone,
                    sales_phone: action.contacts.sales_phone,
                    ta: action.contacts.ta,
                    vk: action.contacts.vk,
                }    
            };
            let en = {
                ...ru,
                contacts: {
                    ...ru.contacts,
                    address: action.contacts.address_eng
                } 
                
            };
            return {
                ...state,
                en: en,
                ru: ru

            }
    }
    return state;
}

export default reducer;