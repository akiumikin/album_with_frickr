const request = require('superagent');
// ToDo 処理をサーバーサイドに回してkeyをクライアントサイドに見せないようにすべき
// https://github.com/akiumikin/album_with_frickr/issues/35
const api_key = '607e9db9c891835db6055e98655a1a2b'

export const setFickerImagesPayload = images => ({
  type: 'SET_FICKER_IMAGES',
  payload: {
    images
  }
});

export function getFickerImages() {
  const data = {
    api_key: api_key,
    method: 'flickr.interestingness.getList',
    format: 'json',
    nojsoncallback: '1',
    extras: 'url_h,date_taken'
  }

  return async dispatch => {
    try {
      const res = await request.get('https://api.flickr.com/services/rest', data);
      dispatch(setFickerImagesPayload(res.body.photos.photo));
    } catch (err) {
      console.log(`Fickerの画像の取得でエラーが発生`)
    }
  };
}
