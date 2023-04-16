import { AnyAction } from "redux";
import { Product } from "../products/products.reducer";
import { setBestSellerProductsSuccess } from "./best-seller.action";
type BestSellerInitialState = {
    products: null | Product[],
}
const bestSellerInitialState: BestSellerInitialState = {
    products: null

}

export const bestSellerReducer = (state: BestSellerInitialState = bestSellerInitialState, action: AnyAction) => {
    if (setBestSellerProductsSuccess.match(action)) {
        return {
            ...state,
            products: action.payload,
        }
    }
    return state;
}