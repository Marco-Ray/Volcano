import axios from 'axios';

export function getJson(params) {
  return axios({
    url: '/api/',
    method: 'get',
    params,
    urlType: 'api',
  });
}

export function postJson(params) {
  return axios({
    url: '/api/post',
    method: 'post',
    params,
    urlType: 'api',
  });
}
