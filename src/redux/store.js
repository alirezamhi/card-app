import {createStore} from "redux";
import {Reducers} from "./root-reducers"
export const store = createStore(Reducers)