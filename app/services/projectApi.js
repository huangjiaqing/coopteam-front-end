import request from 'utils/request';
import api from 'mock/project';

api();

export const getStages = (projectId) => request.get(`/getStages?projectId=${projectId}`); 