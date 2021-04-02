import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mainReducer } from "../reducers/mainReducer";

export const mystore = createStore(mainReducer, composeWithDevTools());
