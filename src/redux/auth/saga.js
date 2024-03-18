import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth } from 'helpers/Firebase';
import {
  adminRoot,
  currentUser,
  apiBaseUrl,
  apiRequestAsync,
} from 'constants/defaultValues';
import { setCurrentUser } from 'helpers/Utils';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../contants';

import {
  loginUserSuccess,
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from './actions';

const loginUrl = `${apiBaseUrl}/login`;

export function* watchLoginUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = (username, password) => {
  return apiRequestAsync('post', loginUrl, { username, password });
};
function* loginWithEmailPassword({ payload }) {
  const { username, password } = payload.user;
  const { history } = payload;
  try {
    const loginUser = yield call(
      loginWithEmailPasswordAsync,
      username,
      password
    );
    console.log(loginUser);
    if (loginUser.status === 200) {
      const item = { uid: loginUser, ...currentUser };
      setCurrentUser(item);
      yield put(loginUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(loginUserError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

export function* watchRegisterUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) =>
  // eslint-disable-next-line no-return-await
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => error);

function* registerWithEmailPassword({ payload }) {
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const registerUser = yield call(
      registerWithEmailPasswordAsync,
      email,
      password
    );
    if (!registerUser.message) {
      const item = { uid: registerUser.user.uid, ...currentUser };
      setCurrentUser(item);
      yield put(registerUserSuccess(item));
      history.push(adminRoot);
    } else {
      yield put(registerUserError(registerUser.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await auth
    .signOut()
    .then((user) => user)
    .catch((error) => error);
    history(`/user/login`);
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  localStorage.removeItem('stufit_current_user');
  yield call(logoutAsync, history);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

// const forgotPasswordAsync = async (email) => {
//   // eslint-disable-next-line no-return-await
//   return await auth
//     .sendPasswordResetEmail(email)
//     .then((user) => user)
//     .catch((error) => error);
// };

const forgotPasswordAsync = (email) => {
  return apiRequestAsync('post', `${apiBaseUrl}/user/otp`, { email });
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  const { history } = payload;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    console.log(forgotPasswordStatus);
    if (forgotPasswordStatus.status === 200) {
      yield put(forgotPasswordSuccess('success'));
      localStorage.setItem('userEmail', email);
      history.push('/user/reset-password');
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

// const resetPasswordAsync = async (resetPasswordCode, newPassword, otp) => {
//   // eslint-disable-next-line no-return-await
//   return await auth
//     .confirmPasswordReset(resetPasswordCode, newPassword, otp)
//     .then((user) => user)
//     .catch((error) => error);
// };

const resetPasswordAsync = (newPassword, resetPasswordCode, otp, email) => {
  return apiRequestAsync('post', `${apiBaseUrl}/verify/otp`, {
    email,
    otp,
    password: newPassword,
    conf_password: resetPasswordCode,
  });
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode, otp } = payload;
  const { history } = payload;
  const email = localStorage.getItem('userEmail');
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword,
      otp,
      email
    );
    if (resetPasswordStatus.code === 200) {
      yield put(resetPasswordSuccess('success'));
      history.push('/user/login');
      localStorage.removeItem('userEmail');
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
