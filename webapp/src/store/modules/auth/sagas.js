import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "~/services/history";
import api from "~/services/api";
import { signInSuccess, signFailure, verifyUserSuccess } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    toast.success("Login realizado com sucesso!");
    history.push("/dashboard");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados!");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, "users", {
      name,
      email,
      password
    });

    toast.success("Cadastro realizado com sucesso!");
    history.push("/sign-in");
  } catch (err) {
    toast.error("Falha ao criar sua conta!");
    yield put(signFailure());
  }
}

export function* verifyUser({ payload }) {
  try {
    const { email } = payload;
    const response = yield call(api.post, "verify", { email });

    const { used } = response.data;

    yield put(verifyUserSuccess(used));
  } catch (err) {
    toast.error("Ops... Tente novamente!");
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/VERIFY_USER_REQUEST", verifyUser),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
