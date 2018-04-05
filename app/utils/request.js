import axios from 'axios';
import { message } from 'antd';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
});

function isCorrectMethod (method) {
  let isCorrect = false;
  const methodTypes = [
    'get',
    'post',
    'delete',
    'put',
  ];
  for (let methodType of methodTypes) {
    if (methodType === method) {
      isCorrect = true;
    }
  }
  return isCorrect;
}

function handleError(e) {
  message.error(`${e.response.data.error}`);
  return e;
}

/**
 * 请求函数
 * @param {*string} url 
 * @param {*string} method 
 * @param {*object} data 
 */
export async function request(url='', method='get', data={}) {
  if (!isCorrectMethod(method)) {
    console.error(`request error: 当前method请求为${method}, 请输入正确的method`);
    return;
  }
  try {
    return await axiosInstance({
      url,
      method: method,
      data
    });
  } catch (e) {
    return handleError(e);
  }
}

export default {

  async get(url) {
    return await request(url, 'get');
  },

  async post(url, data) {
    return await request(url, 'post', data);
  },
  
};