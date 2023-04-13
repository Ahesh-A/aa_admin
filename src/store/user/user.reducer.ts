
import { User } from "firebase/auth"
import { signInStart, signInSuccess, signInFailed, signOutStart, signOutSuccess, signOutFailed } from "./user.action"
import { AnyAction } from "redux"
type UserInitialState = {
    user: User | null,
    isLoading: boolean,
    error: Error | null
}
const USER_INITIAL_STATE: UserInitialState = {
    user: null,
    isLoading: false,
    error: null,

}

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {

    if (signInStart.match(action)) {
        return {
            ...state,
            isLoading: true

        }
    }
    if (signInSuccess.match(action)) {
        return {
            ...state,
            isLoading: false,
            user: action.payload,
        }
    }
    if (signInFailed.match(action)) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    }
    if (signOutStart.match(action)) {
        return {
            ...state,
            isLoading: false,

        }
    }
    if (signOutSuccess.match(action)) {
        return {
            ...state,
            isLoading: false,
            user: null,
        }
    }
    if (signOutFailed.match(action)) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    }

}

//checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

// export const signInStart = withMatcher(() => createAction(USER_ACTION_TYPES.SIGN_IN_START));

// export const signInSuccess = () => withMatcher((currUser: User): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, currUser));

// export const signInFailed = withMatcher((error: Error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

// export const signOutStart = withMatcher(() => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

// export const signOutSuccess = withMatcher(() => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

// export const signOutFailed = withMatcher((error: Error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
