import { rootReducer } from "../root-reducer";

export const selectTrendingItems = (state: ReturnType<typeof rootReducer>) => state.trending_items.products;
