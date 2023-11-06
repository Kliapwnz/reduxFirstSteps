import {TodolistType} from "../App";

export const todolistsReducer = (state: TodolistType[], action: TypeTodolistReducer) => {
    switch (action.type) {
        case "REMOVE_TODOLIST": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            return state
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

type TypeAddTL= ReturnType<typeof addTodolistAC>

export const addTodolistAC =(title:string)=>{
    return {
        type:'ADD-TODOLIST',
        payload:{
            title
        }
    }as const
}