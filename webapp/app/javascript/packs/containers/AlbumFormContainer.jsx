import { connect } from 'react-redux';
import Album from '../components/AlbumFormComponent';
import { getFickerImages } from '../actions/ficker';
import { getAlbum, albumCreateOrUpdate } from '../actions/Album';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getFickerImages() {
      dispatch(getFickerImages());
    },
    getAlbum(id) {
      dispatch(getAlbum(id));
    },
    createOrUpdateAlbum(type, name, urls) {
      dispatch(albumCreateOrUpdate(type, name, urls));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);