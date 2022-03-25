import * as ActionType from "./constants"

const initialValue = {
    value: null
}

export const getAdvancedSearchValueReducer = (state = initialValue, action) => {
    switch(action.type){
        case(ActionType.GET_ADVANCED_SEARCH_VALUE_SUCCESS):{
            state.value = action.data;
            return {...state}
        }
        default:
            return {...state}
    }
}