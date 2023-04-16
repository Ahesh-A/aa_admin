import { AnyAction } from "redux";

import { getProductStart, getProductSucess, getProductFailed } from "./products.action";
export type Variant = {
    color: string,
    color_url: string,
    variant_image_url: string
}
export type AddInfo = {
    discount: number,
    id: string,
    quantity_left: number,
    star: number,
    star_count: number,
    units_sold: number,
    view_count: number,
}
export type Product = {
    color: string,
    id: string,
    imageUrl: string,
    init_date: string,
    name: string,
    price: number,
    size: string,
    variant: Variant[]
} & AddInfo;

type ProductInitailState = {
    products: null | { "men": Product[], "shoe for men": Product[], "shoe for women": Product[], "sunglasses": Product[], "women": Product[]},
    isLoading: boolean,
    error: null | Error
}
const PRODUCT_INITIAL_STATE: ProductInitailState = {
    products: null,
    isLoading: false,
    error: null
}

export const productReducer = (state: ProductInitailState = PRODUCT_INITIAL_STATE, action: AnyAction) => {
    if (getProductStart.match(action)) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (getProductFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    }
    if (getProductSucess.match(action)) {
        return {
            ...state,
            products: action.payload,
            isLoading: false
        }
    }

    return state;
}

// export const getProductStart = withMatcher((): GetProductStart => createAction(PRODUCT_ACTION_TYPES.GET_PRODUTC_START));
// export const getProductFailed = withMatcher((error: Error): GetProductFailed => createAction(PRODUCT_ACTION_TYPES.GET_PRODUTC_FAILED, error));
// export const getProductSucess = withMatcher((products: any) => createAction(PRODUCT_ACTION_TYPES.GET_PRODUTC_SUCCESS, products));