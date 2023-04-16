import { rootReducer } from "../root-reducer";
export const selectBestSellerproducts = (state: ReturnType<typeof rootReducer>) => state.best_seller.products;
