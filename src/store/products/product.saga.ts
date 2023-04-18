import { call, all, takeLatest, put } from "typed-redux-saga/macro";
import { PRODUCT_ACTION_TYPES } from "./products.types";
import { getProdInfo, getData } from "../../utils/firebase.utils";
import { getProductSucess, getProductFailed } from "./products.action";
import { setBestSellerProductsSuccess } from "../best-seller/best-seller.action";
import { setTrendingItemsSuccess } from "../trending-items/trending-items.action";

import { Product } from "./products.reducer";

export function* bestSeller(data: Product[]) {
    yield* put(
        setBestSellerProductsSuccess(
            data.sort((a: Product, b: Product) => b.units_sold - a.units_sold).slice(0, 5)
        )
    );
}

export function* trendingItems(data: Product[]) {
    yield put(
        setTrendingItemsSuccess(
            data
                .sort((a: Product, b: Product) => (+new Date() - +new Date(b.init_date)) / b.units_sold - (+new Date() - +new Date(a.init_date)) / a.units_sold)
                .slice(0, 5)
        )
    );
}

export function* getProduct() {

    try {
        const productList = yield* call(getData);
        const additionalInfo = yield* call(getProdInfo);


        if (productList) {

            const data = productList.reduce((acc, item) => {
                const { title, products } = item;
                const modifiedProducts = products.reduce((a: any, i: any) => {
                    const addInfo = additionalInfo.find((prod) => prod.id === i.id);
                    a.push({ ...i, ...addInfo });
                    return a;
                }, []);
                acc[title.toLowerCase()] = modifiedProducts;
                return acc;
            }, {});
            console.log("modified_data: ", data);

            const productArray: Product[] = [];

            Object.values(data).forEach((category) => {
                category.forEach((product: any) => {
                    productArray.push(product);
                });
            });

            yield* put(getProductSucess(data));
            yield* call(bestSeller, productArray);
            yield* call(trendingItems, productArray);
        }

    } catch (error: any) {
        yield* put(getProductFailed(error));
    }
}
export function* onGetProductStart() {
    yield* takeLatest(PRODUCT_ACTION_TYPES.GET_PRODUTC_START, getProduct);
}
export function* productSaga() {
    yield* all([call(onGetProductStart)]);
}