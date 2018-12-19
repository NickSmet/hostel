import axios from 'axios';

export const getContacts = () => axios.get('http://centeral.ru/php/getContacts.php');
export const getGalleryImgs = (cat) => axios.post('http://centeral.ru/php/getGalleryImgs.php', {
    'category': 'all'
});
export const getSliderImgs = () => axios.get('http://centeral.ru/php/getSliderImgs.php');
export const getMainInfo = () => axios.get('http://centeral.ru/php/getMainPageInfoBlock.php');
export const getVisa = () => axios.get('http://centeral.ru/php/getVisa.php');
export const getFaq = () => axios.get('http://centeral.ru/php/getFaq.php');
export const getRooms = () =>axios.post('http://centeral.ru/php/getRoomData.php');
