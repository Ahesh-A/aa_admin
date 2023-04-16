import { rootReducer } from "../root-reducer";
export const selectProducts = (state: ReturnType<typeof rootReducer>) => state.products?.products;
export const selectProductsIsLoading = (state: ReturnType<typeof rootReducer>) => state.products.isLoading;