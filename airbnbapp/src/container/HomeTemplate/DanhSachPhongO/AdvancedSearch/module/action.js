import * as ActionType from "./constants"

export const actGetAdvancedSearchValue = (data) => {
    return{
        type: ActionType.GET_ADVANCED_SEARCH_VALUE_SUCCESS,
        data,
    }
} 