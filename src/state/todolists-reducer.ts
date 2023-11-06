import {TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: TodolistType[], action: TypeTodolistReducer) => {
    switch (action.type) {
        case "REMOVE_TODOLIST": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.title, filter: 'all'};
            return {...state, newTodolist}
        }
        default: {
            return state
        }
    }
}
type TypeTodolistReducer = TypeRemoveTL | TypeAddTL
type TypeRemoveTL = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: "REMOVE_TODOLIST",
        payload: {
            id
        }
    } as const
}

type TypeAddTL = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title
        }
    } as const
}