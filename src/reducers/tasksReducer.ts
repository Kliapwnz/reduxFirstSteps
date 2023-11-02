import {TaskType} from "../Todolist";

export const tasksReducer = (state: TaskType[], action: any) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return state
        }
        default:
            return state
    }
}

type RemoveTaskACType=ReturnType<typeof removeTaskAC>

const removeTaskAC = () => {
    return {
        type:"REMOVE-TASK"
    }
}