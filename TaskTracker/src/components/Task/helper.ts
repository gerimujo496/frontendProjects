import { TaskType } from "../types/formData"
import styles from "./Task.module.css"
export const backGroundStyle = (task:TaskType)=>{
    switch(task.priority){
        case "low":
            return `${styles.container} ${styles.low}  ${task.completed &&styles.backgroundComplete}`
        case "medium":
             return `${styles.container} ${styles.medium} ${task.completed && styles.backgroundComplete}`

        case "high":
           return `${styles.container} ${styles.high} ${task.completed && styles.backgroundComplete}`
    }

}