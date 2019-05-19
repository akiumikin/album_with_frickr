const request = require('superagent');

export const setAlbumsPayload = albums => ({
  type: 'SET_ALBUMS',
  payload: {
    albums
  }
});

export const deleteAlbumPayload = album => ({
  type: 'DELETE_ALBUM',
  payload: {
    album
  }
});

export function getAlbum() {
  return async dispatch => {
    try {
      const res = await request.get('/_/albums/list');
      dispatch(setAlbumsPayload(res.body));
    } catch (err) {
      console.log('アルバム一覧の取得でエラーが発生')
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