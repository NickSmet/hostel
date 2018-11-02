import * as types from '../actions/actions';

const initialState = {
    en: {
        contacts: {},
        info:{
            title: '',
            text: '',
            image: ''
        },
        faq: []
    },
    ru: {
        contacts: {},
        info:{
            title: '',
            text: '',
            image: ''
        },
        faq: [] 
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
    },
    visa: {
        iframe: ''
    }
};

const reducer = (state = initialState, action) => {
    let justClosed = false;
    switch (action.type) {
        case types.GET_CONTACTS:
            return {
                ...state,
                en: {
                    ...state.en,
                    contacts: {
                        ...action.contacts,
                        address: action.contacts.address_eng
                    }
                },
                ru: {
                    ...state.ru,
                    contacts: {
                        ...action.contacts,
                    }
                }

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
        case types.GET_VISA:
            return {
                ...state,
                visa: {
                    iframe: action.iframe
                }
            }
        case types.GET_FAQ:
            let faq = Object.entries(action.faq);
            let faqEn = [];
            let faqRu = [];
            faq.forEach((item) => {
                faqEn.push({
                    id: item[1].id, 
                    name: item[1].name_eng,
                    description: item[1].description_eng
                });
                faqRu.push({
                    id: item[1].id, 
                    name: item[1].name,
                    description: item[1].description
                });
            });
            return {
                ...state,
                ru: {
                    ...state.ru,
                    faq: faqRu
                },
                en: {
                    ...state.en,
                    faq: faqEn
                }
            }
        default:
            return {
                ...state
            }
    }
    
}

export default reducer;