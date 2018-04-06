import request from 'utils/request';
import api from 'mock/org';

api();

export const getOrgs = () => request.get('/orgList');

export const getProjects = (orgId='') => request.get(`/getProjects?orgId=${orgId}`);