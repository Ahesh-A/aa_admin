
import { rootReducer } from "../root-reducer";

export const selectItemsToDeliver = (state: ReturnType<typeof rootReducer>) => state.items_to_deliver.products;