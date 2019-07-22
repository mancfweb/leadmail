export function getLeadsRequest() {
  return {
    type: "@lead/GET_LEADS_REQUEST"
  };
}

export function getLeadsSuccess(leads) {
  return {
    type: "@lead/GET_LEADS_SUCCESS",
    payload: { leads }
  };
}

export function leadFailure() {
  return {
    type: "@lead/LEAD_FAILURE"
  };
}

export function addLeadRequest(email) {
  return {
    type: "@lead/ADD_LEAD_REQUEST",
    payload: { email }
  };
}

export function addLeadFailure(error) {
  return {
    type: "@lead/ADD_LEAD_FAILURE",
    payload: { error }
  };
}
