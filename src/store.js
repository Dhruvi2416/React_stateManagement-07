import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import createEngine from "redux-storage-engine-localstorage";

import * as storage from "redux-storage";

const engine = createEngine("my-save-key");
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(rootReducer);

const load = storage.createLoader(engine);
load(store)
  .then((newState) => console.log("Loaded state:", newState))
  .catch(() => console.log("Failed to load previous state"));
export default store;
