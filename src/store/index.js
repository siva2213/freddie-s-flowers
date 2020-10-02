import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import mainReducer from "../reducers";

const middleware = [thunk];

export default () => {
  const store = createStore(
    combineReducers({
      mainReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
