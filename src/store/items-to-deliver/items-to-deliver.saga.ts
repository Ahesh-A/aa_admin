import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import { ITEMS_TO_DELIVER_ACTION_TYPES } from "./items-to-deliver.types";
import { getItemsToDeliver } from "../../utils/firebase.utils";
export function* itemsToDeliver() {
    const itemsToDeliver = yield* call(getItemsToDeliver);
    console.log(itemsToDeliver);
}
export function* onItemsToDeliverStart() {
    yield* takeLatest(ITEMS_TO_DELIVER_ACTION_TYPES.ITEMS_TO_DELIVER_START, itemsToDeliver);
}
export function* itemsToDeliverSaga() {
    yield* all([call(onItemsToDeliverStart)]);
}