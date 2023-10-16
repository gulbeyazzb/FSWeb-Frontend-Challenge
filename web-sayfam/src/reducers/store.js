import { legacy_createStore as createStore } from "redux";
import languageReducer from "./languageReducer";

export const store = createStore(languageReducer);
