import * as actionTypes from "../constants/actionTypes.js";
import produce from "immer";

const initialState = {

}

export default function reducer(state = initialState , action){
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      return produce(state , (draft)=>{

      })
    case actionTypes.REMOVE_FROM_CART:
      return produce(state , (draft)=>{

      })
    case actionTypes.INCREASE_QUANTITY:
      return produce(state , (draft)=>{

      })
    case actionTypes.DECREASE_QUANTITY:
      return produce(state , (draft)=>{

      })
    default:
      return state;
  }
}