import { PostType } from "../../types/postType";

export const incrementLikeLocalStorage = (uniqueId: string) => {
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
    localStorage.setItem("posts", JSON.stringify(newPostsState));
  }
};
