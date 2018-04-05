import axios from 'axios';
import api from 'mock/org';

api();

export const getList = () => axios.get('/orgList');