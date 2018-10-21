import axios from 'axios';

export const getContacts = () => axios.get('http://dev.centeral.ru/php/getContacts.php');
export const getGalleryImgs = (cat) => axios.post('http://dev.centeral.ru/php/getGalleryImgs.php', {
    'category': cat
});
export const getSliderImgs = () => axios.get('http://dev.centeral.ru/php/getSliderImgs.php');

