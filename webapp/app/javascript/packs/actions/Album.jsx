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
      console.log('アルバム一覧の取得でエラーが発生')
    }
  };
}

export function getAlbum(id) {
  return async dispatch => {
    try {
      const res = await request.get(`/_/albums/${id}`);
      dispatch(setAlbumPayload(res.body));
    } catch (err) {
      console.log(`ID:${id} のアルバムの取得でエラーが発生`)
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
      console.log('アルバムの削除でエラーが発生');

      // ToDo 削除時のエラーハンドリングをする
      // https://github.com/akiumikin/album_with_frickr/issues/16
      location.reload();
    }
  };
}

export function createAlbum(name, urls = []) {
  const csrf_token = document.getElementsByName('csrf-token').item(0).content;
  const data = {
    name: name,
    urls: urls
  }

  return async dispatch => {
    try {
      const res = await request.post(`/_/albums/create`, data).set('X-CSRF-TOKEN', csrf_token);
      dispatch(addAlbumPayload(res.body));
    } catch (err) {
      console.log('アルバムの作成でエラーが発生');
    }
  };
}