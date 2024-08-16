import React from "react";
import styles from "./Task.module.css";
import { TaskType } from "../types/formData";
import { backGroundStyle } from "./helper";

interface Props {
  task: TaskType;
  removeTask: (id: number) => void;
  markAsCompleted: (id: number) => void;
}

export const Task: React.FC<Props> = ({
  task,
  removeTask,
  markAsCompleted,
}) => {
  return (
    <div className={backGroundStyle(task)}>
      <p
        className={`${styles.title} ${
          task.completed == true && styles.completed
        }`}
      >
        {task.name}
      </p>
      <div className={styles.buttonContainer}>
        <button onClick={() => markAsCompleted(task.id)}>Complete</button>
        <button onClick={() => removeTask(task.id)}>Remove</button>
      </div>
    </div>
  );
};
