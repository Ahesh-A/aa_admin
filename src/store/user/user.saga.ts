import { call, all, put, takeLatest } from "typed-redux-saga/macro";
import { USER_ACTION_TYPES } from "./user.types";
import { getCurrentUser } from "../../utils/firebase.utils";

export function checkUser() {
    try {
        // const user = yield* call(getCurrentUser);
        //  console.log(user);
        console.log('success');

    } catch (e) {

    }


}
export function* onCheckUserSessionStart() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, checkUser);
}
export function* userSaga() {
    yield* all([call(onCheckUserSessionStart)]);
}