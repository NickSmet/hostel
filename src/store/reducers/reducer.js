import * as types from '../actions/actions';

const initialState = {
    en: {
        contacts: {},
        info:{
            title: '',
            text: '',
            image: ''
        } 
    },
    ru: {
        contacts: {},
        info:{
            title: '',
            text: '',
            image: ''
        }   
    },
    ui: {
        main: {
            leftMenuIsOpen: false,
            isHover: false,
            justClosed: false
        },
        mainGallery: {
            imgs: [],
            cat: 'all',
            open: false
        },
        slider: {
            imgs: []
        }
    }
};

const reducer = (state = initialState, action) => {
    let justClosed = false;
    switch (action.type) {
        case types.GET_CONTACTS:
            let ru = {
                ...state.ru,
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
                ...state.en,
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
        case types.GET_GALLERY_IMGS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    mainGallery: {
                        ...state.ui.mainGallery,
                        imgs: action.imgs
                    }
                }
            }
        case types.GET_SLIDER_IMGS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    slider: {
                        ...state.ui.slider,
                        imgs: action.imgs
                    }
                }
            }
        case types.OPEN_LEFT_MENU:
            if(state.ui.main.leftMenuIsOpen === true) {
                justClosed = true;
            }

            return {
                ...state,
                ui: {
                    ...state.ui,
                    main: {
                        ...state.ui.main,
                        leftMenuIsOpen: !state.ui.main.leftMenuIsOpen,
                        justClosed: justClosed
                    }
                }
            }
        case types.HANDLE_HOVER:
            if(state.ui.main.leftMenuIsOpen === true) {
                justClosed = false;
            }
            return {
                ...state,
                ui: {
                    ...state.ui,
                    main: {
                        ...state.ui.main,
                        isHover: !state.ui.main.isHover,
                        justClosed: justClosed
                    }
                }
            }
        case types.CHANGE_GALLERY_CAT:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    mainGallery: {
                        ...state.ui.mainGallery,
                        cat: action.cat
                    }
                }
            }
        case types.OPEN_GALLERY_IMG:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    mainGallery: {
                        ...state.ui.mainGallery,
                        open: action.path
                    }
                }
            }
        case types.GET_INFO:
            return {
                ...state,
                ru: {
                    ...state.ru,
                    info: {...action.info}
                },
                en: {
                    ...state.en,
                    info: {...action.info}
                }
            }
        default:
            return {
                ...state
            }
    }
    
}

export default reducer;