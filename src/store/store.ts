import { rootReducer } from "./root-reducer";
import { compose, Middleware, applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import { rootSaga } from "./root-saga";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';
import createSagaMiddleWare from "redux-saga";

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [
    process.env.NODE_ENV === "development" && logger,
    sagaMiddleWare
].filter((middleware): middleware is Middleware => Boolean(middleware));

type ExtendedPersistConfig = PersistConfig<RootState> & { whitelist: (keyof RootState)[] };

const persistConfig: ExtendedPersistConfig = {
    key: "root",
    storage,
    whitelist: ['user', 'products','items_to_deliver']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

