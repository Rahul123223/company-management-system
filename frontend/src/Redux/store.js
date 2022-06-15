import { createStore, combineReducers, applyMiddleware } from "redux";

import { loginReducer } from "./Login/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
