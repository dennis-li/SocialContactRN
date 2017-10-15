import * as ActionTypes from '../constants/actionType'
 
export function switchInvoiceHeadType(headtype) {
   return {
       type: ActionTypes.IA_SWITCH_HEAD_TYPE,
       payload: headtype,
   }
}

export function setMineTabParent(parent) {
    return {
        type: ActionTypes.MINE_TAB_PARENT,
        parent,
    }
}
