import {TodolistType} from "../App";

export const todolistsReducer = (state: TodolistType[], action: TypeTodolistReducer) => {
    switch (action.type) {
        case "REMOVE_TODOLIST": {
            return state.filter(el => el.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}
type TypeTodolistReducer = TypeRemoveTL
type TypeRemoveTL = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE_TODOLIST",
        payload: {
            id
        }
    } as const
}