import { combineReducers } from "redux";
import gamesReducers from "./gameReducers";
import detailReducer from "./detailRed";

const rootReducer = combineReducers({
  games: gamesReducers,
  detail: detailReducer,
});
export default rootReducer;
