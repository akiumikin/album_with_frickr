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
    case 'DELETE_ALBUM':
      return {albums: state.albums.filter(album => album.id != action.payload.album.id)};
    default:
      return state;
  }
}