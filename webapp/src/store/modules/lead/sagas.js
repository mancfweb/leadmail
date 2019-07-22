import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import { getLeadsSuccess, leadFailure, addLeadFailure } from "./actions";

export function* getLeads() {
  try {
    const response = yield call(api.get, "emails");

    yield put(getLeadsSuccess(response.data));
  } catch (err) {
    toast.error("Falha ao consultar leads!");
    yield put(leadFailure());
  }
}

export function* addLead({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, "emails", { email });

    toast.success("Lead adicionado com sucesso!");
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(addLeadFailure(err.response.data.error));
  }
}

export default all([
  takeLatest("@lead/GET_LEADS_REQUEST", getLeads),
  takeLatest("@lead/ADD_LEAD_REQUEST", addLead)
]);
