import PNotify from 'pnotify/dist/es/PNotify';
const request = require('superagent');

export const setAlbumsPayload = albums => ({
  type: 'SET_ALBUMS',
  payload: {
    albums
  }
});

export const setAlbumPayload = album => ({
  type: 'SET_ALBUM',
  payload: {
    album
  }
});

export const addAlbumPayload = album => ({
  type: 'ADD_ALBUM',
  payload: {
    album
  }
});

export const deleteAlbumPayload = album => ({
  type: 'DELETE_ALBUM',
  payload: {
    album
  }
});

export function getAlbums() {
  return async dispatch => {
    try {
      const res = await request.get('/_/albums/list');
      dispatch(setAlbumsPayload(res.body));
    } catch (err) {
      PNotify.alert('アルバム一覧の取得でエラーが発生')
    }
  };
}

export function getAlbum(id) {
  return async dispatch => {
    try {
      const res = await request.get(`/_/albums/${id}`);
      dispatch(setAlbumPayload(res.body));
    } catch (err) {
      PNotify.alert(`ID:${id} のアルバムの取得でエラーが発生`)
    }
  };
}

export function deleteAlbum(id) {
  const csrf_token = document.getElementsByName('csrf-token').item(0).content;

  return async dispatch => {
    try {
      const res = await request.delete(`/_/albums/${id}`).set('X-CSRF-TOKEN', csrf_token);
      dispatch(deleteAlbumPayload(res.body));
    } catch (err) {
      PNotify.alert(`アルバムの削除でエラーが発生しました\n別タブなどで削除済みでないか確認ください`);
    }
  };
}

export function albumCreateOrUpdate(type, name, urls = [], id) {
  const csrf_token = document.getElementsByName('csrf-token').item(0).content;
  const data = {
    name: name,
    urls: urls
  }

  return async dispatch => {
    try {
      if (type == 'create') {
        const res = await request.post(`/_/albums/create`, data).set('X-CSRF-TOKEN', csrf_token);
        dispatch(addAlbumPayload(res.body));
      } else {
        const res = await request.put(`/_/albums/${id}`, data).set('X-CSRF-TOKEN', csrf_token);
        dispatch(setAlbumPayload(res.body))
      }

      // 連続して登録することは想定せずアルバム一覧か詳細に遷移させる
      if (id) {
        location.href=`/${id}`;
      } else {
        location.href='/';
      }
    } catch (err) {
      PNotify.alert(`アルバムの${type == 'create' ? '作成' : '更新'}でエラーが発生`);
    }
  };
}