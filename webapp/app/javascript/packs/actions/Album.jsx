// import { request } from './../request';
// import notify from 'application/notify.js';
// import { request } from 'superagent'; 
const request = require('superagent');

export const setAlbum = albums => ({
  type: 'SET_ALBUM',
  payload: {
    albums
  }
});

export function getAlbum() {
  return async dispatch => {
    try {
      const res = await request.get('/_/albums/list');
      dispatch(setAlbum(res.body));
    } catch (err) {
      console.log('アルバム一覧でエラーが発生')
    }
  };
}