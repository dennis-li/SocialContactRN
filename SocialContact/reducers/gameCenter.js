'use strict';
 
import * as types from '../constants/actionType';
 
export default function(store = {
  headtype:'personal',
}, action) {
  switch(action.type){
    case types.IA_SWITCH_HEAD_TYPE:
      return {...store, headtype:action.payload};
    default:
      return store;
  }
}