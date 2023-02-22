import axios from 'axios';

export function getVolcano(path) {
  return axios({
    url: `/api/volcano/${path}`,
    method: 'get',
    urlType: 'api',
  });
}

export function likeVolcano(path) {
  return axios({
    url: `/api/volcano/like/${path}`,
    method: 'put',
    urlType: 'api',
  });
}

export function dislikeVolcano(path) {
  return axios({
    url: `/api/volcano/dislike/${path}`,
    method: 'put',
    urlType: 'api',
  });
}

export function getGraphs() {
  return axios({
    url: '/api/volcano/learnmore',
    method: 'get',
    urlType: 'api',
  });
}
