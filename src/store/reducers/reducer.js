import * as types from '../actions/actions';

const initialState = {
    lang: 'ru',
    en: {
        interface: {
            menu: {
                main: 'Homepage',
                hotel: 'Hotel',
                hostel: 'Hostel',
                group: 'Book a Group',
                visa: 'Visa Support',
                transfer: 'Transfer',
                contacts: 'Contacts'
            },
            map: 'Location',
            gallery: {
                title: 'Gallery',
                all: 'All',
                hostel: 'Hostel',
                hotel: 'Hotel',
                other: 'Other'
            },
            sale: 'Sales',
            phoneName: 'Reception',
            book: 'Book',
            look: 'Details',
            send: 'Send',
            transfer: {
                title: 'Transfer Application Form',
                text: 'Please fill out this form and we will get in touch with you shortly.',
            },
            group: {
                title: 'Group Booking',
                text: 'Group Booking Application Form',
                info: {
                    title: 'Group Booking Application Form',
                    textP1: `In order to request a group booking, please fill 
                            out this form. We will get in touch with you withing a few hours.`,
                    textP2: ''
                }
            },
            forms: {
                place: {
                    label: 'Type of accommodation',
                    hotel: 'Hotel',
                    hostel: 'Hostel'
                },
                dateStart: 'Check-in date',
                dateEnd: 'Check-out date',
                time: 'Time',
                name: 'Your individual or organization\'s name',
                people: 'Number of guests',
                comments: 'Additional requests',
                email: 'Contact E-mail',
                phone: 'Contact phone number',
                address: 'Place of arrival',
                feedbackForm: {
                    title: 'Connection Form',
                    name: 'Your name',
                    email: 'Contact E-mail',
                    message: 'Your message'
                },
                purp: {
                    title: 'Purpose of the trip',
                    options: [
                        'Tourism', 'Business', 'Training', 'Sport', 'Other'
                    ]
                },
                age: {
                    title: 'Age group',
                    options: [
                        '18', '18-25', 'Over 25 years old'
                    ]
                },
                other: 'Additional requests'
            },
            contacts: {
                title: 'Contact information',
                address: 'Address',
                hostel: 'Hostel reception',
                hotel: 'Hotel reception',
                sale: 'Sales',
                address: {
                    title: 'Location'
                },
                airport: {
                    svo: {
                        title: 'ОТ АЭРОПОРТА "ШЕРЕМЕТЬЕВО"'
                    },
                    dme: {
                        title: 'ОТ АЭРОПОРТА "ДОМОДЕДОВО"'
                    },
                    vko: {
                        title: 'ОТ АЭРОПОРТА "ВНУКОВО"'
                    },
                }
            }

        },
        contacts: {},
        info:{
            title: '',
            text: '',
            image: ''
        },
        faq: [],
        rooms: []
    },
    ru: {
        interface: {
            menu: {
                main: 'Главная',
                hotel: 'Отель',
                hostel: 'Хостел',
                group: 'Групповое бронирование',
                visa: 'Визовая поддержка',
                transfer: 'Трансфер',
                contacts: 'Контакты'
            },
            map: 'Схема проезда',
            gallery: {
                title: 'Галерея',
                all: 'Все',
                hostel: 'Номера хостела',
                hotel: 'Номера отеля',
                other: 'Разное'
            },
            sale: 'Отдел продаж',
            phoneName: 'Ресепшен',
            book: 'Забронировать',
            look: 'Смотреть',
            send: 'Отправить',
            transfer: {
                title: 'Заказ трансфера',
                text: 'Пожалуйста, заполните форму, и мы свяжемся с Вами в ближайшее время.',
            },
            group: {
                title: 'ГРУППОВОЕ БРОНИРОВАНИЕ',
                text: 'Форма заявки для группового бронирования',
                info: {
                    title: 'ФОРМА ГРУППОВОГО БРОНИРОВАНИЯ',
                    textP1: `Для того что бы забронировать групповую заявку 
                            вам необходимо заполнить данную форму и отправить ее нам.`,
                    textP2: `Бронирование по запросу происходит на сайте компании, заявка 
                            поступает в отдел бронирования и рассматривается в течении 5 часов. 
                            Для бронирования необходимо заполнить форму с обязательным 
                            указанием контактной информации. Менеджер отдела бронирования после 
                            обработки заявки присылает подтверждение бронирования по электронной 
                            почте или связывается по телефону.`
                }
            },
            forms: {
                place: {
                    label: 'Место размещения',
                    hotel: 'Гостиница',
                    hostel: 'Хостел'
                },
                dateStart: 'Дата прибытия',
                dateEnd: 'Дата выезда',
                time: 'Время прибытия',
                name: 'Организация или ФИО заказчика',
                people: 'Количество человек',
                comments: 'Комментарии',
                email: 'Электронная почта для связи',
                phone: 'Телефон для связи',
                address: 'Место прибытия',
                feedbackForm: {
                    title: 'Форма связи',
                    name: 'Ваше имя',
                    email: 'Ваш Email',
                    message: 'Ваше сообщение'
                },
                purp: {
                    title: 'Цель поездки',
                    options: [
                        'Туризм', 'Бизнес', 'Обучение', 'Спорт', 'Иное'
                    ]
                },
                age: {
                    title: 'Возраст участников',
                    options: [
                        '18', '18-25', 'Старше 25 лет'
                    ]
                },
                other: 'Иные требования и пожелания'
            },
            contacts: {
                title: 'Контактные данные',
                address: 'Адрес',
                hostel: 'Ресепшн хостела',
                hotel: 'Ресепшн гостиницы',
                sale: 'Отдел продаж',
                address: {
                    title: 'Схема проезда'
                },
                airport: {
                    svo: {
                        title: 'ОТ АЭРОПОРТА "ШЕРЕМЕТЬЕВО"'
                    },
                    dme: {
                        title: 'ОТ АЭРОПОРТА "ДОМОДЕДОВО"'
                    },
                    vko: {
                        title: 'ОТ АЭРОПОРТА "ВНУКОВО"'
                    },
                }
            }
        },
        contacts: {},
        info:{
            title: '',
            text: '',
            image: ''
        },
        faq: [],
        rooms: []
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
        },
        curRoom: ''
    },
    visa: {
        iframe: ''
    }
};

const reducer = (state = initialState, action) => {
    let justClosed = false;
    switch (action.type) {
        case types.SWITCH_LANG: 
            return {
                ...state,
                lang: action.lang
            }
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
                    info: {...action.info},
                },
                en: {
                    ...state.en,
                    info: {
                        ...action.info,
                        title: action.info.title_eng,
                        text: action.info.text_eng
                    }
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
        case types.GET_ROOMS:
            let rooms = Object.entries(action.rooms);
            let roomsEn = [];
            let roomsRu = [];
            let shared = {};
            rooms.forEach((item) => {
                let extra = Object.entries(item[1].extra);
                let options = Object.entries(item[1].options);
                let extraEn = [];
                let extraRu = [];
                let optionsEn = [];
                let optionsRu = [];

                extra.forEach((item) => {
                    extraEn.push({
                        price: item[1].price, 
                        name: item[1].name_eng,
                        description: item[1].description_eng
                    });
                    extraRu.push({
                        price: item[1].price, 
                        name: item[1].name,
                        description: item[1].description
                    });
                });
                options.forEach((item) => {
                    optionsEn.push({
                        name: item[1].name_eng,
                        description: item[1].description_eng
                    });
                    optionsRu.push({
                        name: item[1].name,
                        description: item[1].description
                    });
                });

                shared = {
                    main_image: item[1].main_image,
                    iframe: item[1].iframe,
                    images: item[1].images,
                    price: item[1].price,
                    category: item[1].category
                };

                roomsEn.push({
                    id: item[1].id, 
                    name: item[1].name_eng,
                    description: item[1].description_eng,
                    options: optionsEn,
                    extra: extraEn,
                    ...shared
                });
                roomsRu.push({
                    id: item[1].id, 
                    name: item[1].name,
                    description: item[1].description,
                    options: optionsRu,
                    extra: extraRu,
                    ...shared
                });
            });
            return {
                ...state,
                ru: {
                    ...state.ru,
                    rooms: [
                        ...roomsRu
                    ]
                },
                en: {
                    ...state.en,
                    rooms: [
                        ...roomsEn
                    ]
                }
                
            }
        default:
            return {
                ...state
            }
    }
    
}

export default reducer;