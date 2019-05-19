const initialState = {
  token: '',
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ALBUM':
      return {
        ...state,
        // id: action.payload.employee.id,
        // client_id: action.payload.employee.client_id,
        // is_active: action.payload.employee.is_active,
        // email: action.payload.employee.email,
        // role_editable: action.payload.employee.role.editable,
        // role_name: action.payload.employee.role.name,
        // role_candidate_create_update: action.payload.employee.role.candidate_create_update,
        // role_candidate_read: action.payload.employee.role.candidate_read,
        // role_job_offer_create_update: action.payload.employee.role.job_offer_create_update,
        // role_job_offer_read: action.payload.employee.role.job_offer_read,
        // role_report: action.payload.employee.role.report,
        // confirmed_at: action.payload.employee.confirmed_at
      };
    default:
      return state;
  }
}