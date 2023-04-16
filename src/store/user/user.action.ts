import { USER_ACTION_TYPES } from "./user.types";

import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/create-action/create-action";

import { User } from "firebase/auth";
import { AdditionalData } from "../../utils/firebase.utils";
import { createTextChangeRange } from "typescript";
import { Admin } from "../../models/admin.model";
// SET_CURRENT_USER = "user/SET_CURRENT_USER ",
// CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
// SIGN_IN_SUCCESS = "user/SIGN_IN_SUCCESS",
// SIGN_IN_FAILED = "user/SIGN_IN_FAILURE",
// SIGN_OUT_START = "user/SIGN_OUT_START",
// SIGN_OUT_SUCCESS = "user/SIGN_OUT_SUCCESS",
// SIGN_OUT_FAILED = "user/SIGN_OUT_FAILED"
//SIGN_IN_START = "user/SIGN_IN_START",


export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SignInStart = Action<USER_ACTION_TYPES.SIGN_IN_START>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, Admin>;
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>



export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const signInStart = withMatcher((): SignInStart => createAction(USER_ACTION_TYPES.SIGN_IN_START));

export const signInSuccess = withMatcher((currUser: Admin): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, currUser));

export const signInFailed = withMatcher((error: Error): SignInFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: Error): SignOutFailed => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));

