import { ActionWithPayload, createAction, withMatcher } from "../../utils/create-action/create-action";
import { Product } from "../products/products.reducer";
import { BEST_SELLER_SCTION_TYPES } from "./best-seller.types";

type SetBestSellerProductsSuccess = ActionWithPayload<BEST_SELLER_SCTION_TYPES.SET_BEST_SELLER_SUCCESS, Product[]>;

export const setBestSellerProductsSuccess = withMatcher((products: Product[]): SetBestSellerProductsSuccess => createAction(BEST_SELLER_SCTION_TYPES.SET_BEST_SELLER_SUCCESS, products));