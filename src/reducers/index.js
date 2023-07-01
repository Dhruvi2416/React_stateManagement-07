import { combineReducers } from "redux";
import { reducer } from "./reducers";
import * as storage from "redux-storage";

const rootReducer = storage.reducer(
  combineReducers({
    reducer: reducer,
  })
);

export default rootReducer;
