
import { PRODUCT_ACTION_TYPES } from "./products.types";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/create-action/create-action";

export type GetProductStart = Action<PRODUCT_ACTION_TYPES.GET_PRODUTC_START>;
export type GetProductSuccess = ActionWithPayload<PRODUCT_ACTION_TYPES.GET_PRODUTC_SUCCESS, any>;
export type GetProductFailed = ActionWithPayload<PRODUCT_ACTION_TYPES.GET_PRODUTC_FAILED, Error>;

export const getProductStart = withMatcher((): GetProductStart => createAction(PRODUCT_ACTION_TYPES.GET_PRODUTC_START));
export const getProductFailed = withMatcher((error: Error): GetProductFailed => createAction(PRODUCT_ACTION_TYPES.GET_PRODUTC_FAILED, error));
export const getProductSucess = withMatcher((products: any) => createAction(PRODUCT_ACTION_TYPES.GET_PRODUTC_SUCCESS, products));