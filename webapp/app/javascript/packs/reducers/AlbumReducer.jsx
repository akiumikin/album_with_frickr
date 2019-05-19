const initialState = {
  albums: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ALBUM':
      return {
        ...state,
        albums: action.payload.albums
      };
    default:
      return state;
  }
}