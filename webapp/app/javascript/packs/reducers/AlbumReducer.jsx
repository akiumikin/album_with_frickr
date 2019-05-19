const initialState = {
  albums: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ALBUMS':
      return {
        ...state,
        albums: action.payload.albums
      };
    case 'SET_ALBUM':
      return {
        ...state,
        album: action.payload.album
      };
    case 'DELETE_ALBUM':
      return {albums: state.albums.filter(album => album.id != action.payload.album.id)};
    case 'ADD_ALBUM':
      return {albums: state.albums.concat(action.payload.album)}
      // ToDo Imageに関してはテーブルも異なるので規模が大きくなってきたらファイルを分ける構成にする
    case 'DELETE_IMAGE':
      return {
        ...state, 
        album: {
          ...state.album,
          album_images: state.album.album_images.filter(image => image.id != action.payload.image.id)
        }
      }
    default:
      return state;
  }
}