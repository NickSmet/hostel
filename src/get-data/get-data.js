import axios from 'axios';

export const getContacts = () => axios.get('http://dev.centeral.ru/php/getContacts.php');
export const getGalleryImgs = (cat) => axios.post('http://dev.centeral.ru/php/getGalleryImgs.php', {
    'category': 'all'
});
export const getSliderImgs = () => axios.get('http://dev.centeral.ru/php/getSliderImgs.php');
export const getMainInfo = () => axios.get('http://dev.centeral.ru/php/getMainPageInfoBlock.php');
export const getVisa = () => axios.get('http://dev.centeral.ru/php/getVisa.php');

