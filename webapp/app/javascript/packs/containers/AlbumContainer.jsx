import { connect } from 'react-redux';
import Album from '../components/AlbumMainComponent';
import { getAlbum, deleteAlbum } from '../actions/Album';

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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);