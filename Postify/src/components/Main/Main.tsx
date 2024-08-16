import React, { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import { Posts } from "../Posts/Posts";
import { PostType } from "../../types/postType";
import postService from "../../services/post-service";
import { incrementLikeLocalStorage } from "./helper";

export const Main = () => {
  const [posts, setPosts] = useState<PostType[]>();
  const [error, setError] = useState("");

  const getPosts = async () => {
    try {
      const postsFromBackend = await postService.getAllPosts();
      setPosts(postsFromBackend);
    } catch (error: unknown) {
      setError((error as Error).message);
    }
  };

  const incrementLike = (uniqueId: string) => {
    incrementLikeLocalStorage(uniqueId);

    setPosts(
      posts?.map((data) => {
        if (data.uniqueId == uniqueId) {
          return { ...data, likes: data.likes + 1 };
        } else {
          return data;
        }
      })
    );
  };

  const deletePost = (id: number, uniqueId: string) => {
    postService.deletePost(id, uniqueId);
    setPosts(posts?.filter((item) => item.uniqueId != uniqueId));
  };

  useEffect(() => {
    if (!posts) {
      getPosts();
    }
  }, [posts, getPosts]);

  return (
    <>
      <Form updatePost={getPosts} />
      <Posts
        posts={posts || []}
        incrementLike={incrementLike}
        deletePost={deletePost}
        error={error}
      />
    </>
  );
};
