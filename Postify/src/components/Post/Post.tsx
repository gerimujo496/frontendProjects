import React, { useState } from "react";
import { findTimeWhenPosted } from "./helper";
import styles from "./Post.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa6";
import { IoSendOutline } from "react-icons/io5";
import dayjs from "dayjs";

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
  likes: number;
  uniqueId: string;
  timestamp: dayjs.Dayjs;

  incrementLike: (id: string) => void;
  deletePost: (id: number, userId: string) => void;
}

export const Post: React.FC<Props> = ({
  title,
  body,
  likes,
  id,
  userId,
  timestamp,
  uniqueId,
  incrementLike,
  deletePost,
}) => {
  return (
    <div className={styles.postContainer} key={userId}>
      <div className={styles.postHearder}>
        <div>
          <h2>{title}</h2>
          <h6 className={styles.timePosted}>{findTimeWhenPosted(timestamp)}</h6>
        </div>

        <div>
          <IoCloseOutline
            onClick={() => deletePost(id, uniqueId)}
            className={styles.deleteIcon}
          />
        </div>
      </div>

      <p>{body}</p>
      <div className={styles.footer}>
        <div
          onClick={() => incrementLike(uniqueId)}
          className={styles.likeContainer}
        >
          <div>{likes}</div>
          <FcLike />
        </div>
        <FaRegComment />
        <IoSendOutline />
      </div>
    </div>
  );
};
