import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer.js";

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// function solution() 
// {
//   for (i = 0; i <= n; ++i) 
//   {
//     if (!( (i+1) % 4)) 
//     { 
//       delay = 400;
//     }
//     else
//     {
//       delay = ( (i+1) % 4) * 100;
//     } 
//   }
// }