import { rootReducer } from "./root-reducer";
import { compose, Middleware, applyMiddleware, createStore } from "redux";
import { rootSaga } from "./root-saga";
import logger from 'redux-logger';
import createSagaMiddleWare from "redux-saga";

export type RootSate = ReturnType<typeof rootReducer>;

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [
    process.env.NODE_ENV === "development" && logger,
    sagaMiddleWare
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancer);

sagaMiddleWare.run(rootSaga);

