import { connect } from 'react-redux';
import Album from '../components/AlbumMainComponent';
import { getAlbum, deleteAlbum, createAlbum } from '../actions/Album';

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbum() {
      dispatch(getAlbum());
    },
    deleteAlbum(id) {
      dispatch(deleteAlbum(id));
    },
    createAlbum(name) {
      dispatch(createAlbum(name));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);