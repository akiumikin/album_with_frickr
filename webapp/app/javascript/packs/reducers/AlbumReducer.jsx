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
    default:
      return state;
  }
}