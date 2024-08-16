import React from "react";
import { Form } from "../Form/Form";
import { Task } from "../Task/Task";
import { useState } from "react";
import { TaskType } from "../types/formData";
import styles from "./Main.module.css";

export const Main = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (task: TaskType) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id?: number) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const markAsCompleted = (id?: number) => {
    setTasks(
      tasks.map((data) => (data.id == id ? { ...data, completed: true } : data))
    );
  };

  return (
    <div className={styles.container}>
      <Form addTask={addTask} />
      <div className={styles.tasksContainer}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            markAsCompleted={markAsCompleted}
          />
        ))}
      </div>
    </div>
  );
};
