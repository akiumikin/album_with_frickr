import { connect } from 'react-redux';
import Album from '../components/AlbumNewComponent';
import { getFickerImages } from '../actions/ficker';
import { createAlbum } from '../actions/Album';

function mapStateToProps(state) {
  return {
    ficker_images: state.ficker_images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFickerImages() {
      dispatch(getFickerImages());
    },
    createAlbum(name, urls) {
      dispatch(createAlbum(name, urls));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);