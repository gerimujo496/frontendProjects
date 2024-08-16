import dayjs from "dayjs";
import postService from "../../services/post-service";
import { PostType } from "../../types/postType";

export const findTimeWhenPosted = (timeBefore: dayjs.Dayjs) => {
  return `${dayjs().diff(timeBefore, "minute")} minutes ago`;
};

export const incrementLike = (uniqueId: string) => {
  const localStorageBefore = localStorage.getItem("posts");
  if (localStorageBefore != null) {
    const postState: PostType[] = JSON.parse(localStorageBefore);
    const newPostsState = postState.map((item) => {
      if (item.uniqueId == uniqueId) {
        return { ...item, likes: item.likes + 1 };
      } else {
        return item;
      }
    });
    localStorage.setItem("posts", `${JSON.stringify(newPostsState)}`);
  }
};
