import { AnyAction } from "redux";
import { Product } from "../products/products.reducer"
import { setTrendingItemsSuccess } from "./trending-items.action";
type TrendingItemsInitialState = {
    products: null | Product[];
}
const TRENDING_ITEMS_INITIAL_STATE: TrendingItemsInitialState = {
    products: null,
}

export const trendingItemsReducer = (state: TrendingItemsInitialState = TRENDING_ITEMS_INITIAL_STATE, action: AnyAction) => {
    if (setTrendingItemsSuccess.match(action)) {
        return {
            ...state,
            products: action.payload,
        }
    }
    return state;
}