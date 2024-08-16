import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { schema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostType } from "../../types/postType";
import postService from "../../services/post-service";
import styles from "./Form.module.css";
import { FiUpload } from "react-icons/fi";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";
import { backendType } from "../../types/backednType";

interface Props {
  updatePost: () => void;
}
export const Form: React.FC<Props> = ({ updatePost }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostType>({ resolver: zodResolver(schema) });

  const onSubmit = async (form: FieldValues) => {
    const onSubmitForm: backendType = {
      userId: 1,
      id: 1,
      title: form.title,
      body: form.body,
    };

    try {
      setLoading(true);
      await postService.addPost(onSubmitForm);
      setLoading(false);
      updatePost();
      reset();
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.title}>What do you have in mind?</h3>
        <div>
          <input
            className={styles.inputForm}
            placeholder="Title"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div>
          <input
            className={styles.inputForm}
            placeholder="Body"
            {...register("body")}
          />
          {errors.body && <p className="text-danger">{errors.body.message}</p>}
        </div>
        <div className={styles.line}></div>
        {isLoading ? (
          <div className="spinner-border" role="status"></div>
        ) : (
          <button type="submit" className={`btn btn-primary ${styles.button}`}>
            Send
          </button>
        )}
        <div className={styles.icons}>
          <FiUpload />
          <MdOutlineSettingsVoice />
          <MdOutlineDraw />
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};
