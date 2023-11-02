import {TaskType} from "../Todolist";

export const tasksReducer = (state: TaskType[], action: TsarType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return state
        }
        default:
            return state
    }
}
type TsarType = RemoveTaskACType
type RemoveTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id:string) => {
    return {
        type: "REMOVE-TASK",
        payload:{
            id:id
        }
    } as const
}