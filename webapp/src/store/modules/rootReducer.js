import { combineReducers } from "redux";

import auth from "./auth/reducer";
import lead from "./lead/reducer";

export default combineReducers({
  auth,
  lead
});
