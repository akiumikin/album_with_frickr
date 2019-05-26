import PNotify from 'pnotify/dist/es/PNotify';
const request = require('superagent');

export const deleteAlbumImagePayload = image => ({
  type: 'DELETE_IMAGE',
  payload: {
    image
  }
});

export function deleteAlbumImage(id) {
  const csrf_token = document.getElementsByName('csrf-token').item(0).content;

  return async dispatch => {
    try {
      const res = await request.delete(`/_/album_images/${id}`).set('X-CSRF-TOKEN', csrf_token);
      dispatch(deleteAlbumImagePayload(res.body));
    } catch (err) {
      PNotify.alert(`アルバム内の画像の削除でエラーが発生しました\n別タブなどで削除済みでないか確認ください`);
    }
  };
}
