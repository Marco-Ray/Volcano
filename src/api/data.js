import axios from 'axios';

export function getVolcano(path) {
  return axios({
    url: `/api/volcano/${path}`,
    method: 'get',
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
