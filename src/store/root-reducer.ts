import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productReducer } from "./products/products.reducer";
import { bestSellerReducer } from "./best-seller/best-seller.reducer";
import { trendingItemsReducer } from "./trending-items/trending-items.reducer";
import { itemsToDeliverReducer } from "./items-to-deliver/items-to-deliver.reducer";
export const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    best_seller: bestSellerReducer,
    trending_items: trendingItemsReducer,
    items_to_deliver: itemsToDeliverReducer
})