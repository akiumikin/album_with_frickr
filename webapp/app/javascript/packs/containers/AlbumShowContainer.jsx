import { connect } from 'react-redux';
import AlbumShow from '../components/AlbumShowComponent';
import { getAlbum } from '../actions/Album';

function mapStateToProps(state) {
  return {
    album: state.album
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbum(id) {
      dispatch(getAlbum(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);