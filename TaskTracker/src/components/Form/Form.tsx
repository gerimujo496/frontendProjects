import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Form.module.css";
import { TaskType } from "../types/formData";
import { schema } from "./validation";

interface Props {
  addTask: (data: TaskType) => void;
}

export const Form: React.FC<Props> = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskType>({
    resolver: zodResolver(schema),
    defaultValues: {
      priority: "low",
      date: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = (data: FieldValues) => {
    const submitForm: TaskType = {
      id: Math.floor(Math.random() * 1000),
      name: data.name,
      description: data.description,
      priority: data.priority,
      date: data.date,
      completed: false,
    };

    addTask(submitForm);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div>
        <label htmlFor="taskname"> Put the name</label>
        <input {...register("name")} id="taskname"></input>
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="description"> Description</label>
        <input {...register("description")} id="description"></input>
        {errors.description && (
          <p className={styles.error}>{errors.description.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="priority"> Priority</label>
        <select id="priority" {...register("priority")}>
          <option>low</option>
          <option>medium</option>
          <option>high</option>
        </select>
        {errors.priority && (
          <p className={styles.error}>{errors.priority.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="date"> Date</label>
        <input type="date" {...register("date")} id="date"></input>

        {errors.date && <p>{errors.date.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};
