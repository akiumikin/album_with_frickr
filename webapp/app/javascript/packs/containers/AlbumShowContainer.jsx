import { connect } from 'react-redux';
import AlbumShow from '../components/AlbumShowComponent';
import { getAlbum } from '../actions/Album';
import { deleteAlbumImage } from '../actions/AlbumImage'

function mapStateToProps(state) {
  return {
    album: state.album
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbum(id) {
      dispatch(getAlbum(id));
    },
    deleteImage(id) {
      dispatch(deleteAlbumImage(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);