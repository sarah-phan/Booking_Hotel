import * as ActionType from "./constants"

export const actGetValueSearch = (data) => {
    return{
        type: ActionType.GET_VALUE_SEARCH,
        data,
    }
} 