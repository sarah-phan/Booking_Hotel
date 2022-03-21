import * as ActionType from "./constants"

const initialValue = {
    value: null
}

export const getValueSearchReducer = (state = initialValue, action) => {
    switch(action.type){
        case(ActionType.GET_VALUE_SEARCH):{
            state.value = action.data;
            return {...state}
        }
        default:
            return {...state}
    }
}