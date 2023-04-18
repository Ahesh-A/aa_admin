
import { itemsToDeliverStart, itemsToDeliverSuccess, itemsToDeliverFailed } from "./items-to-deliver.action";
import { AnyAction } from "redux";
type ItemsToDeliverInitialState = {
    products: null | any,
    isLoading: boolean,
    error: Error | null
}

const ITEMS_TO_DELIVER_INITIAL_STATE: ItemsToDeliverInitialState = {
    products: null,
    isLoading: false,
    error: null
}

export const itemsToDeliverReducer = (state = ITEMS_TO_DELIVER_INITIAL_STATE, action: AnyAction) => {

    if (itemsToDeliverStart.match(action)) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (itemsToDeliverSuccess.match(action)) {
        return {
            ...state,
            isLoading: false,
            products: action.payload,
        }
    }
    if (itemsToDeliverFailed.match(action)) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    }
    return state;

}