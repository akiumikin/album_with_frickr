import { connect } from 'react-redux';
import Album from '../components/AlbumMainComponent';
import { getAlbum } from '../actions/Album';

function mapStateToProps(state) {
  return {
    // id: state.id,
    // client_id: state.client_id,
    // is_active: state.is_active,
    // email: state.email,
    // role_editable: state.role_editable,
    // role_name: state.role_name,
    // role_candidate_create_update: state.role_candidate_create_update,
    // role_candidate_read: state.role_candidate_read,
    // role_job_offer_create_update: state.role_job_offer_create_update,
    // role_job_offer_read: state.role_job_offer_read,
    // role_report: state.role_report,
    // confirmed_at: state.confirmed_at
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbum() {
      dispatch(getAlbum());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);