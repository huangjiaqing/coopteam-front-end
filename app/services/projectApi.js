import request from 'utils/request';
import api from 'mock/project';

api();

export const getProjects = (orgId='') => request.get(`/getProjects/orgId=${orgId}`);