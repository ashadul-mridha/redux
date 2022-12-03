import { combineReducers } from "redux";
import filterReducer from "./filter/filterReducer";


const rootReducer = combineReducers({
    filter: filterReducer
})

export default rootReducer;