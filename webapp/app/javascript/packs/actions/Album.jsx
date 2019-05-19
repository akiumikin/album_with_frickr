// import { request } from '../../../utils/request';
// import notify from 'application/notify.js';

export const setAlbum = album => ({
  type: 'SET_ALBUM',
  payload: {
    employee
  }
});

export function getAlbum() {
  return async dispatch => {
    try {
      dispatch(setAlbum('test'));
    } catch (err) {
      notify({ type: 'error', text: err.response.body.message });
    }
  };
}