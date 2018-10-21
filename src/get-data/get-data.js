import axios from 'axios';

export const getContacts = () => axios.get('http://dev.centeral.ru/php/getContacts.php');
export const getMainGalleryImgs = () => axios.get('http://dev.centeral.ru/php/getGalleryImgs.php');
export const getSliderImgs = () => axios.get('http://dev.centeral.ru/php/getSliderImgs.php');

