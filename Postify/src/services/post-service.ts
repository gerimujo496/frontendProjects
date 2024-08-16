import apiClient from "./api-client";
import { PostType } from "../types/postType";
import dayjs from "dayjs";
import { backendType } from "../types/backednType";
import { v4 as uuidv4 } from "uuid";

class PostService {
  async getAllPosts<T>() {
    try {
      const postsFromServer = await apiClient.get<backendType[]>("/posts");
      const postsFromServerAddedLikes: PostType[] = postsFromServer.data.map(
        (item) => {
          return { ...item, likes: 0, timestamp: dayjs(), uniqueId: uuidv4() };
        }
      );
      const postsFromLoaclStorage = localStorage.getItem("posts");

      if (postsFromLoaclStorage == null) {
        return postsFromServerAddedLikes;
      }
      const postsFromLoaclStorageArray: PostType[] = JSON.parse(
        postsFromLoaclStorage
      );
      postsFromLoaclStorageArray.reverse();

      return [...postsFromLoaclStorageArray, ...postsFromServerAddedLikes];
    } catch (error) {
      throw new Error("An error occured");
    }
  }
  async deletePost(id: number, uniqueId: string) {
    try {
      const localStorageBefore = localStorage.getItem("posts");
      if (localStorageBefore != null) {
        const postState: PostType[] = JSON.parse(localStorageBefore);
        const newPostsState = postState.filter(
          (item) => item.uniqueId != uniqueId
        );

        localStorage.setItem("posts", JSON.stringify(newPostsState));
      }
      apiClient.delete(`/posts/${id}`);
    } catch (error) {
      throw new Error("The deletion can not be done");
    }
  }
  async addPost(newPost: backendType) {
    try {
      const response = await apiClient.post<backendType>("/posts", newPost);

      const onSubmitForm: PostType = {
        userId: response.data.userId,
        id: response.data.id,
        title: newPost.title,
        body: newPost.body,
        likes: 0,
        timestamp: dayjs(),
        uniqueId: uuidv4(),
      };

      const localStorageBefore = localStorage.getItem("posts");
      if (localStorageBefore == null) {
        localStorage.setItem(`posts`, `[${JSON.stringify(newPost)}]`);
        return response;
      }
      const postState: PostType[] = JSON.parse(localStorageBefore);
      postState.push(onSubmitForm);
      localStorage.setItem("posts", JSON.stringify(postState));

      return response;
    } catch (error) {
      throw new Error("The post cannot be done");
    }
  }
}
export default new PostService();
