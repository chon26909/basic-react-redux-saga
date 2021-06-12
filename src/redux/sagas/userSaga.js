import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_REQUESTED,GET_USERS_SUCCESS,GET_USERS_FAILED } from '../types'

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi() {

  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function* fetchUser() {
    try {

        const users = yield call(getApi);
        yield put({type: GET_USERS_SUCCESS,users: users});

    } catch (error) {

        yield put({type: GET_USERS_FAILED,massage: error.massage})
    }
} 

function* userSaga() {
    yield takeEvery(GET_USERS_REQUESTED,fetchUser);
}

export default userSaga;

