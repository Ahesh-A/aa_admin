
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/create-action/create-action";
import { ITEMS_TO_DELIVER_ACTION_TYPES } from "./items-to-deliver.types";



type ItemsToDeliverStart = Action<ITEMS_TO_DELIVER_ACTION_TYPES.ITEMS_TO_DELIVER_START>;
type ItemsToDeliverSuccess = ActionWithPayload<ITEMS_TO_DELIVER_ACTION_TYPES.ITEMS_TO_DELIVER_SUCCESS, any>;
type ItemsToDeliverFailed = ActionWithPayload<ITEMS_TO_DELIVER_ACTION_TYPES.ITEMS_TO_DELIVER_FAILED, Error>;

export const itemsToDeliverStart = withMatcher((): ItemsToDeliverStart => createAction(ITEMS_TO_DELIVER_ACTION_TYPES.ITEMS_TO_DELIVER_START));
export const itemsToDeliverSuccess = withMatcher((products: any): ItemsToDeliverSuccess => createAction(ITEMS_TO_DELIVER_ACTION_TYPES.ITEMS_TO_DELIVER_SUCCESS, products));
export const itemsToDeliverFailed = withMatcher((error: Error): ItemsToDeliverFailed => createAction(ITEMS_TO_DELIVER_ACTION_TYPES.ITEMS_TO_DELIVER_FAILED, error));
