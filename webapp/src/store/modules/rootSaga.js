import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import lead from "./lead/sagas";

export default function* rootSaga() {
  return yield all([auth, lead]);
}
