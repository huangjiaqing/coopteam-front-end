import request from 'utils/request';
import api from 'mock/org';

api();

export const getList = () => request.get('/orgList');