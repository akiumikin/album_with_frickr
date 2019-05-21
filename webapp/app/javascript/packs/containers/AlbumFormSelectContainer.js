import { connect } from 'react-redux';
import Album from '../components/AlbumFormSelectComponent';
import { getFickerImages } from '../actions/ficker';
import { getAlbum, albumCreateOrUpdate } from '../actions/Album';

function mapStateToProps(state) {
  return {
    ficker_images: state.ficker_images,
    album: state.album
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFickerImages() {
      dispatch(getFickerImages());
    },
    getAlbum(id) {
      dispatch(getAlbum(id));
    },
    createOrUpdateAlbum(type, name, urls, id) {
      dispatch(albumCreateOrUpdate(type, name, urls, id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);