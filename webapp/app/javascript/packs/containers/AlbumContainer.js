import { connect } from 'react-redux';
import Album from '../components/AlbumComponent';
import { getAlbums, deleteAlbum } from '../actions/Album';

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbums() {
      dispatch(getAlbums());
    },
    deleteAlbum(id) {
      dispatch(deleteAlbum(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);