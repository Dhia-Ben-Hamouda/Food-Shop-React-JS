import * as actionTypes from "../constants/actionTypes.js";
import produce from "immer";

const initialState = {
  items:[],  // { id , name , price , picture , quantity }
  quantity:0,
  total:0
}

export default function reducer(state = initialState , action){
  switch(action.type)
  {
    case actionTypes.ADD_TO_CART:
      return produce(state , (draft)=>{
        const item = action.payload;

        const exist = draft.items.find((x)=> x.id === item.id);

        if(exist)
        {
          exist.quantity++;
        }
        else
        {
          draft.items.push(item);
        }
        draft.quantity++;
        draft.total+=item.price;
      })
    case actionTypes.REMOVE_FROM_CART:
      return produce(state , (draft)=>{
        const id = action.payload;
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