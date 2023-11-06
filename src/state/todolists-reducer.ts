import {TodolistType} from "../App";

export const todolistsReducer = (state: TodolistType[], action: TodolistsReducerType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return
        }
        default:
            return state
    }
}

type TodolistsReducerType = TemoveTodolistACType
type TemoveTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id
        }

    } as const
}