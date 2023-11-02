import {TaskType} from "../Todolist";

export const tasksReducer = (state: TaskType[], action: any) => {
    switch (action.type) {
        case "XXX": {
            return state
        }
        default: return state
    }
}