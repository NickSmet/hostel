import axios from 'axios';

export const getContacts = () => axios.get('http://dev.centeral.ru/php/getContacts.php');

