import { withMatcher, ActionWithPayload, createAction } from "../../utils/create-action/create-action";
import { Product } from "../products/products.reducer";

import { TRENDING_ITMS_ACTION_TYPES } from "./trending-items.types";

type SetTrendingItemsSuccess = ActionWithPayload<TRENDING_ITMS_ACTION_TYPES.SET_TRENDING_ITEMS_SUCCESS, Product[]>;

export const setTrendingItemsSuccess = withMatcher((products: Product[]): SetTrendingItemsSuccess => createAction(TRENDING_ITMS_ACTION_TYPES.SET_TRENDING_ITEMS_SUCCESS, products));