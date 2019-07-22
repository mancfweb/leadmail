import produce from "immer";

const INITIAL_STATE = {
  leads: [],
  new_lead: null,
  new_loading: false,
  loading: false,
  new_fail: false,
  failMessage: null
};

export default function lead(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@lead/GET_LEADS_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@lead/GET_LEADS_SUCCESS": {
        draft.leads = action.payload.leads;
        draft.loading = false;
        draft.new_loading = false;
        break;
      }
      case "@lead/ADD_LEAD_REQUEST": {
        draft.new_loading = true;
        draft.new_fail = false;
        break;
      }
      case "@lead/ADD_LEAD_FAILURE": {
        draft.new_fail = true;
        draft.failMessage = action.payload.error;
        break;
      }
      default:
    }
  });
}
