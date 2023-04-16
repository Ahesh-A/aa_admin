import { all, call } from "redux-saga/effects";
import { userSaga } from "./user/user.saga";
import { productSaga } from "./products/product.saga";
import { itemsToDeliverSaga } from "./items-to-deliver/items-to-deliver.saga";

export function* rootSaga() {
    yield all([call(userSaga), call(productSaga), call(itemsToDeliverSaga)]);
}