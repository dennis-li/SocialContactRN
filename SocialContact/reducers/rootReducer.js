'use strict';

import * as ActionTypes from '../constants/actionType'

import {combineReducers} from 'redux'

//AS: AdvancedSearch
import model_GameCenter from './gameCenter'
import model_UserInfo from './userInfo'
import model_Confirm from './showConfirm'

function mineTabParent(store = {parent: 'GAME_CENTER'}, action) {
    switch (action.type) {
        case ActionTypes.MINE_TAB_PARENT:
            return {
                ...store,
                parent: action.parent,
            }
        default:
            return store
    }
}
const rootReducer = combineReducers({
    model_GameCenter,
    model_UserInfo,
    model_Confirm,
    mineTabParent
})

export default rootReducer